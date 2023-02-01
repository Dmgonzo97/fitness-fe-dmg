import React from 'react'
import { Link, useNavigate } from 'react-router'
import UserProfile from '../pages/user-profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mfologo from '../images/MFO-Logo.png';
import { useDispatch } from 'react-redux';
import { setLogInStatus } from '../../slices/authSlice';

export default function NavbarLoggedIn() {

  const dispatch = useDispatch()

  const LogOut = () => {
    dispatch(setLogInStatus(false))
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
          <button onClick={LogOut}>
            <a>
              <FontAwesomeIcon icon='fa-solid fa-user' />
            </a>
          </button>
        </div>
      </div>

    </div>
  )
}