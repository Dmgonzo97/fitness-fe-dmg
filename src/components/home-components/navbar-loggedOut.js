import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mfologo from '../images/MFO-Logo.png';

export default function NavBarLoggedOut() {
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
        <div>
          <button className='btn'>Login</button>
        </div>

        <div className="login-icon">
          <a>
            <FontAwesomeIcon icon='fa-solid fa-user' />
          </a>
        </div>
      </div>

    </div>
  )
}