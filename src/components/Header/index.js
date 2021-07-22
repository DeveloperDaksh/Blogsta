import React from 'react';
import './style.css'

const Header = (props) => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href = "#"> Home</a>
            <a href = "#"> About Us</a>
            <a href = "#"> Contact US</a>
        </nav>
        <div>
          Social Media Links
        </div>

    </header>
   )

 }

export default Header