import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Navbar from '../home-components/navbar'

const Signup = () => {

  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  let LoginRoute = () => {
    navigate('/login')
  }

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="signup-container">
        <div className="signup-form">
          <form action="">
            <input
              type="text"
              placeholder='Username'
              className='signupInput'
              // value={}
              name='username'
              // onChange={}
            />

            <input
              type="text"
              placeholder='Password'
              className='signupInput'
              // value={}
              username='password'
              // onChange={}
            />

            <input
              type="text"
              placeholder='Confirm Password'
              className='signupInput'
              // value={}
              name='confirmPassword'
              // onChange={}
            />
            <button type='submit' className='btn'>
              Sign Up!
            </button>

            <button className='btn' onClick={LoginRoute}>
              Wrong place? Login Here!
            </button>

          </form>
        </div>
      </div>
    </>
  )
}

export default Signup