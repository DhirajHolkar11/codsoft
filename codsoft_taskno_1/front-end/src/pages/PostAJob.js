import React from 'react'
import './PostAJob.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function PostAJob() {
  return (
    <>
    
      <Navbar/>


    <div className="postajob-title">Post a job</div>
    
    <form className='postajob-form'>

      <div className="job-role">
        <div className='job-role-title'>choose a job role</div>
        <select>
        <option>Lawyer</option>
        <option>Engineer</option>
        <option>Singer</option>
        <option>Teacher</option>
        <option>Musician</option>
        <option>Pilot</option>
        </select>

      </div>


      <input className='education-input' type="text" placeholder='Education required' />
      <input className='experience-input'  type="number" placeholder='Experience in years' />
      <input className='location-input'  type="text" placeholder='Enter location' />

    <button className='postajob-button'>Post Job</button>


    </form>
    

    <Footer/>
    
    
    </>
  )
}

export default PostAJob