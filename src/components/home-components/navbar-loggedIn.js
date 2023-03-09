import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mfologo from '../images/MFO-Logo.png';
import { setLogInStatus } from '../../slices/authSlice';

export default function NavbarLoggedIn() {

  const dispatch = useDispatch();

  const [APIurl,] = useState('https://fitness-be-dmg.herokuapp.com/user/verify')

  const LogOut = () => {
    dispatch(setLogInStatus(false))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(APIurl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' }
    })
    .then((response) => response.json())
    
    LogOut();
  }

  return (
    <div className="navbar">

      <div className="left-nav">
        <div className="logo-img">
          <img src={Mfologo} alt="MFO logo" />
        </div>

        <div className="app-title">
          <h1>
            <a href="#">MyFitness Odyssey</a>
          </h1>
        </div>
      </div>

      <div className="right-nav">
        <div className="login-icon">
          <FontAwesomeIcon className='fa' icon='fa-solid fa-user' onClick={handleSubmit} />
        </div>
      </div>

    </div>
  )
}