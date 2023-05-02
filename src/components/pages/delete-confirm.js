import React from 'react'
import Navbar from '../home-components/navbar';
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setLogInStatus } from '../../slices/authSlice';


const DelConfirm = () => {

  const User = useSelector((state) => state.user)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const HomeRoute = () => {
    navigate('/');
  }

  const LogOut = () => {
    dispatch(setLogInStatus(false));
  };

  const UserRoute = () => {
    navigate('/userprofile')
  }

  const DeleteUser = (e) => {
    e.preventDefault();

    fetch(`https://fitness-be-dmg.herokuapp.com/user/delete/${User.id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('User Deleted!');
        LogOut();
        HomeRoute();
      })
  };


  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="delete-container">
        <div className="delete-box">
          <div className="title">
            <h2>Are you sure you would like to delete this account?</h2>
          </div>
          <div className="btns">
            <button onClick={DeleteUser}>Yes, I am sure</button>
            <button onClick={UserRoute}>No, please return me back to my profile</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DelConfirm