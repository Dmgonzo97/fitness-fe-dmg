import React from 'react'
import HomeContent from '../home-components/home-content'
import NavBarLoggedOut from '../home-components/navbar-loggedOut'
import NavBar from '../home-components/navbar-loggedOut'

const Home = () => {
	return (
		<>
			<div className="container">

				<NavBarLoggedOut />

				{/* <NavBarLoggedIn /> */}

				<HomeContent />

			</div>
		</>
	)
}

export default Home