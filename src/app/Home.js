import React, {useState} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import logo from './SharedScreenshot.jpg'
function Home(){
  return (
    <div>
           <Link to="/Signup">
             <div>
                 Sign up
                 <div className = 'home-photo'>
                   <img src = {logo}/>
                 </div>
             </div>

           </Link>
    </div>
 );
}
export default Home;