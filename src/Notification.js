
import React from 'react'
import './notification.css';
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
export const Notification = () => {
  return (
    <div class="notification">
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
    <div id='tag_line'>
        <p>Want to see more?<a href='#'> Verify your account</a> to join this neighbourhood.</p>
    </div>
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
            <h1>Notifications</h1>
            <p>You don't have any notifications right now.</p>
          </div>
        <div id='r'>

        </div>
    </div>

</div>
  )
}
export default Notification;
