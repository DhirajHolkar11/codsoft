import React from 'react'
import './HomeBody.css';
import image from '../images/image.png'

function HomeBody() {


  return (
    <>

<div class="home-page-container">

        <div class="home-page-container-item1 home-page-container-item">


            <div class="home-page-title">SimpleSearch</div>
            <div class="quiz-information">A simple and efficient way to search jobs. Signup and take one more step towards finding your dream job.</div>

            <div className="upload-container">
              <input type="file" id="upload-button"/>
              <label for="upload-button">Upload Resume</label>
            </div>

        </div>


        <div class="home-page-container-item2 home-page-container-item">
    
               <div class="home-page-image">
                  <img src={image} alt=""/>
              </div>
    
        </div>

</div>
    
    
    </>
  )
}

export default HomeBody