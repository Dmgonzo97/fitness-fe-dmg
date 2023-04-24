import React from 'react'
import HomeContent from '../home-components/home-content'
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