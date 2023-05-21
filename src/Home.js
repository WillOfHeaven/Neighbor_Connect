
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
export const Home = () => {
    
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
         <button><AddIcon /><p>Post</p></button>
        </div>
            </div>
            <div id='m'>
            <div id='posted'>
                <div id='upper'>
                    <span>K</span>
                    <div id='details'>
                        <p id='name'>K.M</p>
                        <p id='address'>Fremont, CA . Edited 1w. 🌐</p>
                    </div>
                     <MoreHorizIcon  id='dot'/>
                </div>
                <p id='para'>My daughter just took our dog out for their usual evening walk. 
                She came home and told me she heard a neighbor beating up his dog
                 because it barked at my dog when they walked by from the backyard.
                   What we can do for that dog?  I think the owner should be punished.
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
                   <span>K</span>
                   <input type='text' placeholder='Add a comment'></input>
                   </div>
            </div>
            <div id='posted'>
                <div id='upper'>
                    <span>K</span>
                    <div id='details'>
                        <p id='name'>K.M</p>
                        <p id='address'>Fremont, CA . Edited 1w. 🌐</p>
                    </div>
                     <MoreHorizIcon  id='dot'/>
                </div>
                <p id='para'>My daughter just took our dog out for their usual evening walk. 
                She came home and told me she heard a neighbor beating up his dog
                 because it barked at my dog when they walked by from the backyard.
                   What we can do for that dog?  I think the owner should be punished.
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
                   <span>K</span>
                   <input type='text' placeholder='Add a comment'></input>
                   </div>
            </div>
            <div id='posted'>
                <div id='upper'>
                    <span>K</span>
                    <div id='details'>
                        <p id='name'>K.M</p>
                        <p id='address'>Fremont, CA . Edited 1w. 🌐</p>
                    </div>
                     <MoreHorizIcon  id='dot'/>
                </div>
                <p id='para'>My daughter just took our dog out for their usual evening walk. 
                She came home and told me she heard a neighbor beating up his dog
                 because it barked at my dog when they walked by from the backyard.
                   What we can do for that dog?  I think the owner should be punished.
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
                   <span>K</span>
                   <input type='text' placeholder='Add a comment'></input>
                   </div>
            </div>
            </div>
            <div id='r'>

            </div>
        </div>

    </div>
  )
}
export default Home;
