import React from 'react'
import './AboutUs.css';
import about1 from '../images/about1.jpg.webp';
import about2 from '../images/about2.jpg.webp';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutUs() {
  return (
    <>

    <Navbar/>
    
        <div className="container11"> 
            <div className="container11-item1">
                <div>OUR STORY</div>
                Welcome to our job search platform, a cutting-edge website designed to bridge the gap between talented job seekers and their dream careers. In a world where finding the right job can be as daunting as the job itself, our website stands out with its user-friendly interface and sophisticated matching algorithms. We understand that every job seeker is unique, with distinct skills, experiences, and aspirations. That's why our platform offers a personalized experience, tailoring job recommendations and alerts to fit individual profiles. Our extensive database includes opportunities across various industries, roles, and locations, ensuring that whether you're a fresh graduate or a seasoned professional, your next career move is just a few clicks away.
            </div>
            <div className="container11-item2"><img src={about1} alt=""/></div>
        </div>

        <div className="container11"> 
            <div className="container11-item1">
                Beyond job listings, our website is a comprehensive career development hub. We believe in empowering job seekers with the tools and knowledge necessary to succeed in today's competitive job market. This includes access to exclusive articles, insightful career advice, resume building tips, and interview preparation guides, all crafted by experts. Our commitment extends to employers as well, providing them with a platform to discover and connect with top talent efficiently. By fostering a dynamic and supportive community, we aim to transform the landscape of job hunting and recruitment, making it more accessible, transparent, and effective for everyone involved. Join us and embark on a journey to unlock your professional potential and find your ideal job.
            </div>
            <div className="container11-item2"><img src={about2} alt=""/></div>
        </div>
    
    
    <Footer/>
    
    
    </>
  )
}

export default AboutUs