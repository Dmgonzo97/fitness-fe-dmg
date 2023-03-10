import React from 'react'
import { useNavigate } from 'react-router'
import HomeContent from '../home-components/home-content'
import Navbar from '../home-components/navbar'

const Home = () => {

	let navigate = useNavigate();

 let userNav = () => {
	navigate('/userprofile/:id')
 }

	return (
		<>
			<div className="container">
				{
					<Navbar />
				}

				<HomeContent />

				<button onClick={userNav}>user profile</button>

			</div>
		</>
	)
}

export default Home