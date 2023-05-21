require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { client } = require('./connect.js');
const app = express();
// Enable CORS
app.use(cors());

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Define your API routes here
// request code here
const router = express.Router();

// Define a route to upload injured animal information
router.post('/report', async (req, res) => {
  try {
    // Extract the animal information from the request body
    const { name, tagId, status, longitude, latitude} = req.body;

    // Perform any necessary validation or data processing here
        // Create the animal document
        await client.connect();
        const animalDocument = {
            name,
            tagId,
            status,
            longitude,
            latitude,
          };
      
          // Insert the animal document into the collection
        //await collection.insertOne(animalDocument);
        await client
        .db('WillOfHeaven')
        .collection('reports')
        .insertOne(animalDocument);
        res.json({ message: 'Reporting of Animal Data Successful' });
    // Save the animal information to the database
    // Your logic here to save the information to the database

    // Example response data
    const animal = { name, tagId, status, coordinates, longitude, latitude };
    // Return the saved animal information as JSON response
    res.json(animal);
  } catch (error) {
    // Handle any errors that occur
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

module.exports = router;
