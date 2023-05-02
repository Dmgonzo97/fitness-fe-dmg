import React from 'react'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Mfologo from '../images/MFO-Logo.png';
import { setLogInStatus } from '../../slices/authSlice';
import { setEditModeStatus } from '../../slices/editSlice'
import { useNavigate } from 'react-router';

export default function NavbarLoggedIn() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HomeRoute = () => {
    navigate('/');
  }

  const LogOut = () => {
    dispatch(setLogInStatus(false))
  }

  const EditOffBtn = () => {
    dispatch(setEditModeStatus(false))
  }

  const handleLogout = (e) => {
    LogOut()
    EditOffBtn()

    e.preventDefault();

    HomeRoute();
  }

  const UserRoute = () => {
    navigate('/userprofile')
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
          <FontAwesomeIcon
            className='fa'
            icon='fa-solid fa-user'
            onClick={UserRoute}
          />
        </div>

        <div className="logOut-icon">
          <h4>Log Out</h4>
          <FontAwesomeIcon
            className='fa'
            icon='fa-solid fa-arrow-right-from-bracket'
            onClick={handleLogout}
          />
        </div>
      </div>

    </div>
  )
}