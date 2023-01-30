import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import HomeContent from '../home-components/home-content'
import NavbarLoggedIn from '../home-components/navbar-loggedIn'
import NavBarLoggedOut from '../home-components/navbar-loggedOut'
import { useSelector, useDispatch } from 'react-redux'
import { setLogInStatus } from '../../slices/authSlice'

const Home = () => {

	const logInStatus = useSelector((state) => state.auth.logInStatus)
	

	return (
		<>
			<div className="container">
				{
					logInStatus ? (
						<NavbarLoggedIn setLogIn={setLogInStatus}/>
					) : (
						<NavBarLoggedOut />
					)
				}

				<HomeContent />

			</div>
		</>
	)
}

export default Home