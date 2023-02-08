import React from 'react'
import { useSelector , } from 'react-redux';
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