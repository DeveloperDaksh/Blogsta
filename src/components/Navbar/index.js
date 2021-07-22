import React from 'react'
import './style.css'
import img from '../../assets/icons/search.png'
/**
* @author
* @function Navbar
**/

const Navbar = (props) => {
  return(
    <div className="navbar">
        <ul classname="navbarMenu">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">Posts</a>
            </li>
            <li>
                <a href="#">Contact Us</a>
            </li>
        </ul>
        <div className="search">
            <input type="text" placeholder="Search" />
            <img src={img} alt="Search"/>
        </div>

    </div>
   )

 }

export default Navbar