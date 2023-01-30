import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Icons from './components/icons';
import './styles/main.scss';
import Home from './components/pages/home';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import UserProfile from './components/pages/user-profile';

export default function App() {

	const [logInStatus, setLogInStatus] = useState(false)

	Icons();

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home logInStat={logInStatus} setLogInStat={setLogInStatus} />} />
				<Route exact path='/login' element={<Login setLogInStat={setLogInStatus}/>} />
				<Route exact path='/signup' element={<Signup setLogInStat={setLogInStatus}/>} />
				<Route exact path='/userprofile' element={<UserProfile setLogInStat={setLogInStatus}/>} />
			</Routes>
		</BrowserRouter>
	);

};
