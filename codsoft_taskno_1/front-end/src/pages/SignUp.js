import React, {useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './SignUp.css';

function SignUp() {

  const [registrationData, setRegistrationData] = useState({
    username:'',
    password:''
  });

const handleRegistrationChange = (e)=>{
  const {name, value} = e.target;

  setRegistrationData((prevData)=>({
    ...prevData,
    [name]: value,
  })

  )
}


const handleRegistrationSubmit = async (e)=>{
  e.preventDefault();


  try{
    const response = await axios.post('http://localhost:8000/signup', registrationData);
    console.log(response.data);
  }

  catch(error){
    console.log(error);
  }

  setRegistrationData({
    username:'',
    password:''
  })
}

  return (


    <div>

      <h1>Signup</h1>


      <form className='signup-form' onSubmit={handleRegistrationSubmit}>


        <input className='signup-username' type="text" name='username' placeholder='username' value={registrationData.username} onChange={handleRegistrationChange} required/>
        <input className='signup-password' type="password" name='password' placeholder='password' value={registrationData.password} onChange={handleRegistrationChange} required/>

        <button className='signup-button' type='submit'>signup</button>

        <p className='signup-info'>already registered? 
          <Link to="/login">login here</Link>
        </p>

        
      </form>


    </div>
  )
}

export default SignUp