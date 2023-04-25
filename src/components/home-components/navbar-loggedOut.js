import React from 'react';
import Mfologo from '../images/MFO-Logo.png';
import { useNavigate } from 'react-router';

function NavBarLoggedOut() {

  let navigate = useNavigate();

  let SignUpRoute = () => {
    navigate('/signup')
  };

  let LoginRoute = () => {
    navigate('/login')
  };

  let HomeRoute = () => {
    navigate('/')
  };

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
        <div>
          <button className='btn' onClick={SignUpRoute}>Sign Up</button>
          <button className='btn' onClick={LoginRoute}>Login</button>
        </div>

      </div>

    </div>
  )
}

export default NavBarLoggedOut;