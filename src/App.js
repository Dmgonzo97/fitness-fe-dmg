import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Icons from './components/icons';
import './styles/main.scss';
import Home from './components/pages/home';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import UserProfile from './components/pages/user-profile';
import CreatePost from './components/pages/create-post';
import Blog from './components/pages/blog';


export default function App() {

	Icons();

	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/login' element={<Login />} />
				<Route exact path='/signup' element={<Signup />} />
				<Route exact path='/userprofile' element={<UserProfile />} />
				<Route exact path='/create-post' element={<CreatePost />} />
				<Route exact path='/:id' element={<Blog />} />
			</Routes>
		</BrowserRouter>
	);

};
