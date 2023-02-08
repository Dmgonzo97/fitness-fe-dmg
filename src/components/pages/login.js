import React from 'react'
import { useNavigate } from 'react-router'
import Navbar from '../home-components/navbar'

const Login = () => {
  
  let navigate = useNavigate
  
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className='login-container'>
        <div className="login-form">
          <form className="formbox">
            <input type="text" />
            <input type="text" />
          </form>
        </div>
      </div>
    </>
  )
}

export default Login