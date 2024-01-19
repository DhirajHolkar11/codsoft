import React from 'react'
import './ContactUs.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function ContactUs() {
  return (
    <>
    
    
    <Navbar/>


    
<div className="contact-flexbox">
    <div className="contact-flexbox-item contact-form">
        <div>Send Us A Message</div>
        <form className='contactus'>
            <input type="text" placeholder="Enter your name" class="input1"/>
            <input type="email" placeholder="Enter your email" class="input2"/>
            <textarea name="" id="" cols="30" rows="10" class="input3" placeholder="Enter text here"></textarea>
            <button className="input4">SUBMIT</button>
        </form>
    </div>

    <div className="contact-flexbox-item contact-details">
    <div className="contact-details1"><i className="fa-sharp fa-solid fa-location-dot"></i>Address</div>
    <div className="contact-details2">XYZ, India</div>
    <div className="contact-details3"><i className="fa-solid fa-phone"></i>Lets Talk</div>
    <div className="contact-details4">+91-12345-67890</div>
    <div className="contact-details5"><i className="fa-solid fa-envelope"></i>Email Support</div>
    <div className="contact-details6">contact@example.com</div>
    </div>
</div>


<Footer/>


    </>
  )
}

export default ContactUs