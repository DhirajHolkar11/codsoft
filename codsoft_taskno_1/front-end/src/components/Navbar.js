import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>


<div className="navbar">

    <div className='navbar-item1'>SimpleSearch</div>


    <nav className='navbar-item2'>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/contact">Contact Us</Link>
        </li>

        <li>
          <Link to="/searchajob">Search a job</Link>
        </li>

        <li>
          <Link to="/postajob">Post a job</Link>
        </li>
      
    </nav>
    

    <div className="navbar-item3">

      <div className="login-container">
          <Link to="/login">Login</Link>
      </div>

      <div className="signup-container">
          <Link to="/signup">Sign Up</Link>
      </div>


    </div>
</div>



    </>
  );
}

export default Navbar;
