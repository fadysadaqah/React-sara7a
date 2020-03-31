import React from 'react';
import './assests/css/App.css'
// **********************************************
import Navbar from './components/Navbar'
import Post from './components/Post'
import Test from './components/Test'
import About from './components/About'
import Profile_header from './components/Profile_header'
// **********************************************
import $ from 'jquery';
import Popper from 'popper.js';
import "material-icons/iconfont/material-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'semantic-ui-css/semantic.min.css'  


// #############################################################################################
function App() {
  return (
    <div className="App">
      <Profile_header
         user_img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRES4UlTPDh-MG2_IXxnRyincd4JQj1RTURMJYSzjA1tt9lv5X4&usqp=CAU"
         user_img_alt=""
         first_name="Fady"
         last_name="Sadakah"
      />
<link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
      <Navbar
        site_name="Sara7a"
        user_img="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
        user_img_alt=""
        user_first_name="Fady"
        user_last_name="Sadakah"
        msg_count="15"
        notifications_count="35"
      />
      <Post
        user_img="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
        user_img_alt=""
        first_name="Fady"
        last_name="Sadakah"
        since="6 months ago"
        post_text="Visit Our site now .. Solve tons of questions 🔥🔥"
        post_img={"https://i.picsum.photos/id/"+7+"/700/400.jpg"}
        isliked={true}
      />
      <br/>
      <br/>
      <br/>
      <About/>
      <Test/>
  
    </div>
  );
}

export default App;
