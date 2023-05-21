
import React from 'react'
import './home.css';
import Notification from './Notification';
import AdbIcon from '@mui/icons-material/Adb';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import CollectionsIcon from '@mui/icons-material/Collections';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import MapIcon from '@mui/icons-material/Map';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import EmailIcon from '@mui/icons-material/Email';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import {useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
export const Home = () => {
    const navigate = useNavigate();
    const [animal, setAnimals] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:4002/animals')
        .then(response => setAnimals(response.data))
        .catch(error => console.error(error));
    }, []);
  return (
    <div class="home">
        <section id='fix'>
        <nav>
            <div id="left">
            <CollectionsIcon id='icon' />
            <h1>NConnect</h1>
            </div>
            <div id='mid'>
                <SearchIcon id='icon'/>
                <input type='text' placeholder='Search NConnect'></input>
            </div>
            
            <div id='right'>
                <AdbIcon  id='icon' />
                <PersonAddAlt1Icon id='icon' />
                <icon></icon>
            </div>
        </nav>
        {/* <div id='tag_line'>
            <p>Want to see more?<a href='#'> Verify your account</a> to join this neighbourhood.</p>
        </div> */}
        </section>
        
        
        <div id='con'>
            <div id='l'>
        <div id='fixed'>
        <div id='headings'>
         <HomeIcon />
         <p>Home</p>
         </div>
         <div id='headings'>
         <MapIcon />
         <p>Discover</p>
         </div>
         <div id='headings'>
         <CircleNotificationsIcon />
         <p>Notification</p>
         </div>
         <div id='headings'>
         <EmailIcon />
         <p>Messages</p>
         </div>
          <button onClick={()=>navigate("/post")}><AddIcon /><p>Post</p></button>
        </div>
            </div>
            <div id='m'>
            {animal.map(animal => (
            <div id='posted'>
                <div id='upper'>
                    <span>{animal.nameOfPer.charAt(0)}</span>
                    <div id='details'>
                        <p id='name'>{animal.nameOfPer}</p>
                        <p id='address'>{animal.address}🌐</p>
                    </div>
                     <MoreHorizIcon  id='dot'/>
                </div>
                <p id='para'>
                    Issue : {animal.issue}
                    <br></br>
                    Link_of_nearby_NGO <a href ={animal.url}>Link</a>
                    <br></br>
                    Description : {animal.animalName}
                    <br></br>
                    Identification : {animal.tagId}
                    <br></br>
                    Status : {animal.status}
                    <br></br>
                    Date of report : {animal.date}
                    <br></br>
                    time : {animal.time}

                   </p>
                   <div id='bottom'>
                    <div id='likes'>
                    <p id='heart'>❤️</p><p>1</p>
                    </div>
                    <div id='right'>
                        <div id='options'>
                        <FavoriteBorderIcon id='choose liked' />
                        <p>Like</p>
                        </div>
                        <div id='options'>
                        <ChatBubbleOutlineIcon id='choose' />
                        <p>Comment</p>
                        </div>
                        <div id='options'>
                        <ShareIcon id='choose' />
                        <p>Share</p>
                        </div>
                    </div>
                   </div>
                   <hr></hr>
                   <div id='comment'>
                   <span>{animal.nameOfPer.charAt(0)}</span>
                   <input type='text' placeholder='Add a comment'></input>
                   </div>
            </div>))}
            </div>
            <div id='r'>

            </div>
        </div>

    </div>
  )
}
export default Home;
