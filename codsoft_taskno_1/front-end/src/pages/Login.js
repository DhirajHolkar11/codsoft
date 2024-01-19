import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login() {


const [loginData, setLoginData] = useState({
  username:'',
  password:''
})


// submit function 
const handleLoginSubmit = async (e) =>{
  e.preventDefault();

  try{
    const response = await axios.post('http://localhost:8000/login', loginData);
    const {success, message}= response.data;

    if(success){
      console.log('login successfully');
    }

    else{
      console.log(message);
    }

  }

  catch(error){
    console.error('login error', error)
  }
  setLoginData({
     username:'',
     password:''
  })
}



const handleLoginChange = (e) =>{
  const {name, value} = e.target;
  setLoginData((prevData)=>({
    ...prevData,
    [name]:value
  }))
}



  return (


   <div>
    <h1>Login</h1>

    <form className='login-form' onSubmit={handleLoginSubmit}>
      <input className='login-username' type="text" name='username' placeholder='username' value={loginData.username} onChange={handleLoginChange} required/>
      <input className='login-password' type="password" name='password' placeholder='password' value={loginData.password} onChange={handleLoginChange} required/>

      <button className='login-button' type='submit'>Login</button>

      <p className='login-info'>Not registered yet?
        <Link to = '/signup'>Sign Up</Link>
      </p>
      
    </form>


   </div>


  )
}

export default Login