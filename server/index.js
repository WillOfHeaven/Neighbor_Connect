// require('dotenv').config();
// const cors = require('cors');
// const express = require('express');
// const { client } = require('./connect.js');
// //const firebase = require('firebase');
// //const { MongoClient } = require('mongodb');
// //const { initializeApp } = require('firebase/app');
// //const { getAuth } = require('firebase/auth');
// const app = express();
// const uri = process.env.MONGODB_URI;
// // Enable CORS
// app.use(cors());

// async function main() {
  

//   async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

  
// }

// console.log('Connected to MongoDB Atlas');

// // Middleware
// app.use(express.json()); // Parse JSON bodies
// app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// // Define your API routes here
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //     apiKey: "AIzaSyAu3RUa41IwyKDoeK9U2zwMgwpVma4qReg",
// //     authDomain: "neighborhood-connect-3f32c.firebaseapp.com",
// //     projectId: "neighborhood-connect-3f32c",
// //     storageBucket: "neighborhood-connect-3f32c.appspot.com",
// //     messagingSenderId: "686255178639",
// //     appId: "1:686255178639:web:1b3bb38bd8652570bf01fa",
// //     measurementId: "G-X41WDFRD0J"
// //   };
// // firebase.initializeApp(firebaseConfig);
// // User authentication routes 

// app.post('/signup', async (req, res) => {
//   const { email, password } = req.body;

//   // Check if user already exists
//   const existingUser = await client
//     .db('WillOfHeaven')
//     .collection('users')
//     .findOne({ email });
//   if (existingUser) {
//     return res.status(409).json({ error: 'User already exists' });
//   }

//   try {
//     // Generate salt and hash the password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Save the user data in the database
//     await client
//       .db('WillOfHeaven')
//       .collection('users')
//       .insertOne({ email, password: hashedPassword });

//     res.json({ message: 'Registration successful' });
//   } catch (error) {
//     res.status(500).json({ error: 'Registration failed' });
//   }
// });

  
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   // Find the user by email
//   const user = await client
//     .db('WillOfHeaven')
//     .collection('users')
//     .findOne({ email });
//   if (!user) {
//     return res.status(401).json({ error: 'Invalid credentials' });
//   }

//   try {
//     // Compare the entered password with the hashed password
//     const passwordMatch = await bcrypt.compare(password, user.password);
//     if (!passwordMatch) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     // Authentication successful, return a session token or JWT
//     const sessionToken = 'example-session-token'; // Generate your own token here

//     res.json({ message: 'Login successful', sessionToken });
//   } catch (error) {
//     res.status(500).json({ error: 'Login failed' });
//   }
// });
  
//   app.get('/logout', (req, res) => {
//     // Handle user logout logic
//   });
  
//   // Image upload route
//   app.post('/upload', (req, res) => {
//     // Handle image upload logic
//   });
  
//   // NGO search route
//   app.get('/ngos', (req, res) => {
//     // Handle NGO search logic
//   });
  
//   // Injured animals route
//   app.get('/injured-animals', (req, res) => {
//     // Handle injured animals logic
//   });
  
//   // Other routes...
  
// // Start the server
// const port = 4002;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const { client } = require('./connect.js');
const bcrypt = require('bcrypt');
const app = express();
// const fs = require('fs');
// const { BlobServiceClient } = require("@azure/storage-blob");
// const connectionString = "DefaultEndpointsProtocol=https;AccountName=animals1947;AccountKey=ZCausDebSKiUtyX3DpAONmCByRHsgo1G48DFIf151y+CCvbLvU3Qqd1U1z98Zx/XBpGBN9Li23IS+AStbz4rcg==;EndpointSuffix=core.windows.net";
// const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
// const containerName = "images";
// const containerClient = blobServiceClient.getContainerClient(containerName);


//const upload = multer({ dest: 'uploads/' });
// Import the animals router
//const ReportRouter = require('./report');

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
// Add the animals router as a middleware
app.post('/submit', async (req, res) => {
  try {
    // Extract the animal information from the request body
    const { nameOfPer, address, issue, url, imageUrl, animalName, tagId, status } = req.body;

    // Perform any necessary validation or data processing here
        // Create the animal document
                // Get the current date and time
        const currentDate = new Date();
          
        // Extract the date components
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
        const day = currentDate.getDate();
          
        // Extract the time components
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();
          
        // Create an object with separate fields for date and time
        const date = `${year}-${month}-${day}`;
        const time = `${hours}:${minutes}:${seconds}`;        
        // Send the dateTimeObject to your database
        
        
        await client.connect();
        const animalDocument = {
          nameOfPer,
          address,
          issue,
          url,
          imageUrl,
          animalName,
          tagId,
          status,
          date,
          time
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
    //const animal = { name, tagId, status, longitude, latitude, image};
    // Return the saved animal information as JSON response
    //res.json(animal);
  } catch (error) {
    // Handle any errors that occur
    console.error(error);
    //res.status(500).json({ error: 'An error occurred' });
  }
});

// Define a route to fetch animal information based on image name
// app.get('/animal', async (req, res) => {
//   try {
//     const { image } = req.query;

//     // Connect to the database
//     await client.connect();

//     // Access the collection
//     //const collection = client.db('YourDatabaseName').collection('YourCollectionName');

//     // Query the collection based on the image name
//     const animalInfo = await client.db('WillOfHeaven').collection('reports').findOne({image});
//     res.json({ message: 'Fetching of Animal Data Successful' });
//     // Send the retrieved animal information as a JSON response
//     res.json(animalInfo);
//   } catch (error) {
//     console.error('Error occurred while fetching animal information:', error);
//     res.status(500).json({ error: 'An error occurred' });
//   } finally {
//     // Close the database connection
//     await client.close();
//   }
// });

// Define a route to get all user information
app.get('/users', async (req, res) => {
  try {
    // Retrieve all user documents from the collection
    const users = await client.db('WillOfHeaven').collection('users').find().toArray();

    // Send the user information as the response
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});
app.get('/animals', async (req, res) => {
  try {
    // Retrieve all animal reports from the collection
    const animals = await client.db('WillOfHeaven').collection('reports').find().toArray();
    //send the animal information as the response
    res.json(animals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});
// app.get('/imageFetch', (req, res) => {
//   // Get the image name from the request parameters
//   const imageName = 'R.png'
//   // Construct the path to the image file
//   const imagePath = './images/' + imageName;

//   // Check if the image file exists
//   if (fs.existsSync(imagePath)) {
//     // Read the image file
//     fs.readFile(imagePath, (err, data) => {
//       if (err) {
//         console.error(err);
//         res.status(500).json({ error: 'Failed to read the image file' });
//       } else {
//         // Create a JSON object with the image data
//         //console.log(imagePath);
//         //res.json(imagePath);
//         //res.json({ message: 'Fetching of Image Data Successful' });
//         const imageData = {
//           imageName: imageName,
//           imageData: data.toString('base64'),
//         };
//     // Send the JSON object as the response
//     res.json(imageData);
//       }
//     });
//     } else {
//     res.status(404).json({ error: 'Image not found'});
//   }
// });



// app.post('/upload', upload.single('image'), async (req, res) => {
//   try {
//     const formData = new FormData();
//     formData.append('image', fs.createReadStream(req.file.path));

//     const response = await axios.post('https://api.imghaste.com/upload', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         Authorization: 'YOUR_IMGHASTE_API_KEY',
//       },
//     });

//     // Assuming the response data contains the hosted image URL
//     const imageURL = response.data.url;

//     // Store the imageURL or use it as needed in your backend logic

//     // Send the hosted image URL back to the frontend
//     res.json({ imageURL });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Image upload failed' });
//   }
// });
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const existingUser = await client
    .db('WillOfHeaven')
    .collection('users')
    .findOne({ email });
  if (existingUser) {
    return res.status(409).json({ error: 'User already exists' });
  }

  try {
    // Generate salt and hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save the user data in the database
    await client
      .db('WillOfHeaven')
      .collection('users')
      .insertOne({ email, password: hashedPassword });

    res.json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = await client
    .db('WillOfHeaven')
    .collection('users')
    .findOne({ email });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  try {
    // Compare the entered password with the hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Authentication successful, return a session token or JWT
    const sessionToken = 'example-session-token'; // Generate your own token here

    res.json({ message: 'Login successful', sessionToken });
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
});

// Other routes...

// Start the server
const port = 4002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
