import React from 'react'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mfologo from '../images/MFO-Logo.png';
import { setLogInStatus } from '../../slices/authSlice';

export default function NavbarLoggedIn() {

  const dispatch = useDispatch();
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
          <FontAwesomeIcon className='fa' icon='fa-solid fa-user' onClick={LogOut} />
        </div>
      </div>

    </div>
  )
}