import React from 'react'
import { useSelector ,useDispatch } from 'react-redux';
import { setLogInStatus } from '../../slices/authSlice';
import authSlice from '../../slices/authSlice';
import NavbarLoggedIn from './navbar-loggedIn';
import NavBarLoggedOut from './navbar-loggedOut';

export default function Navbar() {

  const logInStatus = useSelector((state) => state.auth.logInStatus)

  return (
    <>
      {
        logInStatus
          ? (
            <NavbarLoggedIn />
          )
          : (
            <NavBarLoggedOut />
          )
      }
    </>
  )
}