import React from 'react'
import './SearchAJob.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function SearchAJob() {
  return (
    <>
    
      <Navbar/>


    <div className="searchajob-title">Search a job</div>
    
    
    <form className='searchajob-form'>



      <input className='search-input' type="text" placeholder='Search here' />


      <input className='name-input' type="text" placeholder='Name' />
      <input className='email-input'  type="email" placeholder='Email' />


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



      <div className="upload-container">
              <input type="file" id="upload-button"/>
              <label for="upload-button">Upload Resume</label>
      </div>



    <button className='searchajob-button'>Apply</button>


    </form>
    
    

    <Footer/>
    
    
    
    </>
  )
}

export default SearchAJob