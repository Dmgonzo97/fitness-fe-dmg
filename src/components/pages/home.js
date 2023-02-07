import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import HomeContent from '../home-components/home-content'
import NavbarLoggedIn from '../home-components/navbar-loggedIn'
import NavBarLoggedOut from '../home-components/navbar-loggedOut'
import { useSelector } from 'react-redux'
import Navbar from '../home-components/navbar'

const Home = () => {

	return (
		<>
			<div className="container">
				{
					<Navbar />
				}

				<HomeContent />

			</div>
		</>
	)
}

export default Home