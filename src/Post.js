
// import React from 'react'
// import './post.css';

// const Post = () => {
//   return (
//     <div className='post'>
//         <form>
//             <div id='left'>
//                 <h4>Your Details</h4>
//             <div id='fields'>
//             <p>Name<span>*</span></p>
//             <input type='text' id='nameofPer'></input>
//             </div>
//             <div id='fields'>
//             <p>Address<span>*</span></p>
//             <textarea id='address'></textarea>
//             </div>
//             <div id='fields'>
//             <p>Issue<span>*</span></p>
//             <textarea id='issue'></textarea>
//             </div>
//             <div id='fields'>
//             <p>Link</p>
//             <input type='url' id='url'></input>
//             </div>
//             <div id='fields'>
//             <p>File</p>
//             <input type='file' id='filename'></input>
//             </div>
//             {/* <div id='fields'>
//             <p>Image</p>
//             <input type='image'></input>
//             </div> */}
//             </div>
//             <div id='right'>
//                 <h4>Details of the Animal</h4>
//             <div id='fields'>
//             <p>Name of the Animal<span>*</span></p>
//             <input type='text' id='nameofani'></input>
//             </div>
//             <div id='fields'>
//             <p>Tag Id<span>*</span></p>
//             <input type='text' id='tagid'></input>
//             </div>
//             <div id='fields'>
//             <p>Status<span>*</span></p>
//             </div>
//             <div id='radio'>
//             <div id='fields'>
//             <input type='radio' name='status' id='li'></input>
//             <p>Lightly Injured</p>
//             </div>
//             <div id='fields'>
//             <input type='radio' name='status' id='bi'></input>
//             <p>Badly Injured</p>
//             </div>
//             <div id='fields'>
//             <input type='radio' name='status' id='not'></input>
//             <p>Not in a good Condition</p>
//             </div>

//             </div>

//             <button>Submit</button>

//             </div>

//         </form>
//     </div>
//   )
// }

// export default Post
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import './post.css';
import Home from './Home';
//import { useHistory } from 'react-router-dom';
import { Navigate } from "react-router-dom";
let truth = false;
const Post = () => {
  const navigate = useNavigate();
  //const history = useHistory();
  const [nameOfPer, setNameOfPer] = useState('');
  const [address, setAddress] = useState('');
  const [issue, setIssue] = useState('');
  const [url, setUrl] = useState('');
  //const [filename, setFilename] = useState('');
  const [animalName, setAnimalName] = useState('');
  const [tagId, setTagId] = useState('');
  const [status, setStatus] = useState('');
  //const fs = require('fs');
  const { BlobServiceClient } = require("@azure/storage-blob");
  // const blobSasUrl = "";
  //const navigate = useNavigate();
  let imageUrl = '';
   
  // Assuming you have set up the required dependencies and Azure Storage configuration

  // Handle the image upload event
  const handleImageUpload = async (event) => {
    const imageFile = event.target.files[0];
    
    try {

      const connectionString = "DefaultEndpointsProtocol=https;AccountName=animals1947;AccountKey=ZCausDebSKiUtyX3DpAONmCByRHsgo1G48DFIf151y+CCvbLvU3Qqd1U1z98Zx/XBpGBN9Li23IS+AStbz4rcg==;EndpointSuffix=core.windows.net";
      const containerName = "images";
      
      // Create a new BlobServiceClient
      const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
      // const blobServiceClient = new BlobServiceClient(connectionString);
      // // Get a reference to the container
      const containerClient = blobServiceClient.getContainerClient(containerName);
      // Generate a unique blob name
      const originalFileName = imageFile.name; // Original file name
      const uniqueBlobName = `${Date.now()}-${originalFileName}`; // Generate unique blob name

      const blobName = uniqueBlobName;
    
      // Create a new BlockBlobClient with the unique blob name
      const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    
      // Upload the image file to Azure Blob Storage
      await blockBlobClient.uploadData(imageFile);
    
      // Generate the URL for the uploaded image
      imageUrl = blockBlobClient.url;
      // Display a success message or perform other actions
      console.log("Image uploaded and user data saved successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare the data to be sent to the server
    const data = {
      nameOfPer,
      address,
      issue,
      url,
      imageUrl,
      animalName,
      tagId,
      status,
    };
    // Make an API request using Axios to submit the data to the server
    axios
      .post('http://localhost:4002/submit', data)
      .then((response) => {
        console.log('Post submitted successfully');
        truth = true;
        //history.push('/home');
        // Handle the response or show a success message
        if(truth){alert('Post submitted successfully');}
        navigate(-1);
      })
      .catch((error) => {
        console.error(error);
        // Handle any errors or show an error message
      });
  };

  return (
    <div className='post'>
      <form onSubmit={handleSubmit}>
        <div id='left'>
          <h4>Your Details</h4>
          <div id='fields'>
            <p>Name<span>*</span></p>
            <input type='text' id='nameofPer' value={nameOfPer} onChange={(e) => setNameOfPer(e.target.value)} />
          </div>
          <div id='fields'>
            <p>Address<span>*</span></p>
            <textarea id='address' value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
          </div>
          <div id='fields'>
            <p>Issue<span>*</span></p>
            <textarea id='issue' value={issue} onChange={(e) => setIssue(e.target.value)}></textarea>
          </div>
          <div id='fields'>
            <p>Link</p>
            <input type='url' id='url' value={url} onChange={(e) => setUrl(e.target.value)}></input>
          </div>
          {/* <div id='fields'>
            <p>File</p>
            <input type='file' id='filename' value={filename} onChange={(e) => setFilename(e.target.value)}></input>
          </div> */}
          <div id='fields'>
              <input type="file" onChange={handleImageUpload} />
          </div>
        </div>
        <div id='right'>
          <h4>Details of the Animal</h4>
          <div id='fields'>
            <p>Name of the Animal<span>*</span></p>
            <input type='text' id='nameofani' value={animalName} onChange={(e) => setAnimalName(e.target.value)}></input>
          </div>
          <div id='fields'>
            <p>Tag Id<span>*</span></p>
            <input type='text' id='tagid' value={tagId} onChange={(e) => setTagId(e.target.value)}></input>
          </div>
          <div id='fields'>
            <p>Status<span>*</span></p>
          </div>
          <div id='radio'>
            <div id='fields'>
              <input type='radio' name='status' id='li' onChange={() => setStatus('Lightly Injured')}></input>
              <p>Lightly Injured</p>
            </div>
            <div id='fields'>
              <input type='radio' name='status' id='bi' onChange={() => setStatus('Badly Injured')}></input>
              <p>Badly Injured</p>
            </div>
            <div id='fields'>
              <input type='radio' name='status' id='not' onChange={() => setStatus('Not in a good Condition')}></input>
              <p>Not in a good Condition</p>
            </div>
          </div>
          <button type='submit'>Submit</button>
          {/* {truth = false} */}
          <button onClick={()=>navigate("/home")}>Home</button>
          
        </div>
      </form>
    </div>
  );
};

export default Post;
