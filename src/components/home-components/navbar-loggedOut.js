import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mfologo from '../images/MFO-Logo.png';
import { useDispatch } from 'react-redux';
import { setLogInStatus } from '../../slices/authSlice';
import { useNavigate } from 'react-router';

function NavBarLoggedOut() {
  
  let navigate = useNavigate();

  let SignUpRoute = () => {
    navigate('/signup')
  };

  let LoginRoute = () => {
    navigate('/login')
  }

  let UserRoute = () => {
    navigate('/userprofile')
  }

  let HomeRoute = () => {
    navigate('/')
  }

  const dispatch = useDispatch()

  const LogIn = () => {
    dispatch(setLogInStatus(true))
  }

  return (
    <div className="navbar">

      <div className="left-nav">
        <div className="logo-img">
          <img src={Mfologo} alt="MFO logo" />
        </div>

        <div className="app-title">
          <h1>
            <a href="/" onClick={HomeRoute}>MyFitness Odyssey</a>
          </h1>
        </div>
      </div>

      <div className="right-nav">
        <div>
          <button className='btn' onClick={SignUpRoute}>Sign Up</button>
          <button className='btn' onClick={LogIn}>Login</button>
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

export default NavBarLoggedOut;