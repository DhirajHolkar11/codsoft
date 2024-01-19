import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>

<section className="information-section">
    <div className="information-section-container">
        

        <div className="information-item1">
            <div className="information-item1-title">SITEMAP</div>
            <div className="information-item1-element information-item1-info"><Link to='/home'>Home</Link></div>
            <div className="information-item1-element information-item1-info"><Link to='/aboutus'>About Us</Link></div>
            <div className="information-item1-element information-item1-info"><Link to='/contact'>Contact Us</Link></div>
            <div className="information-item1-element information-item1-info"><Link to='/searchajob'>Search a job</Link></div>
            <div className="information-item1-element information-item1-info"><Link to='/postajob'>Post a job</Link></div>
        </div>

        <div className="information-item1">
            <div className="information-item1-title">SOCIALS</div>
            <div className="information-item1-element information-item1-info"><i class="fa-brands fa-facebook"></i>Facebook</div>
            <div className="information-item1-element information-item1-info"><i class="fa-brands fa-instagram"></i>Instagram</div>
            <div className="information-item1-element information-item1-info"><i class="fa-brands fa-twitter"></i>Twitter</div>
            <div className="information-item1-element information-item1-info"><i class="fa-brands fa-youtube"></i>Youtube</div>
        </div>

        <div className="information-item1">
            <div className="information-item1-title">CONTACT</div>
            <div className="information-item1-element">Email: contact@example.com</div>
            <div className="information-item1-element">Phone: +91-12345-67890</div>

           

        </div>


        <div className="information-item1">
        
            <div className="information-item1-title">NEWSLETTER</div>
            <input className="information-item1-input" type="email" placeholder="Enter Email"/>
            <button className="information-item1-button">SUBSCRIBE</button>
        </div>

    </div>
    

    <div className="line-shape1"></div>

    <div className="information-item2">&copy; SimpleSearch</div>

</section>




    </>
  )
}

export default Footer