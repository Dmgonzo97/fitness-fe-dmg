import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mfologo from '../images/MFO-Logo.png';
import { setLogInStatus } from '../../slices/authSlice';
import { useNavigate } from 'react-router';

export default function NavbarLoggedIn() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [APIurl,] = useState('https://fitness-be-dmg.herokuapp.com/user/verify')

  const HomeRoute = (e) => {
    e.preventDefault();
    navigate('/');
  }

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
          <h1 onClick={HomeRoute}>
            MyFitness Odyssey
          </h1>
        </div>
      </div>

      <div className="right-nav">
        <div className="login-icon">
          <h4>User Profile</h4>
          <FontAwesomeIcon className='fa' icon='fa-solid fa-user' onClick={handleSubmit} />
        </div>

        <div className="logOut-icon">
          <h4>Log Out</h4>
          <FontAwesomeIcon className='fa' icon='fa-solid fa-arrow-right-from-bracket' />
        </div>
      </div>

    </div>
  )
}