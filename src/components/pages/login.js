import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux';
import { setLogInStatus } from '../../slices/authSlice';
import Navbar from '../home-components/navbar'
import { setUserDetails } from '../../slices/userSlice';

const Login = () => {

  let navigate = useNavigate();

  const HomeRoute = () => {
    navigate('/')
  };

  const SignupRoute = () => {
    navigate('/signup')
  };

  const dispatch = useDispatch();
  const LogIn = () => {
    dispatch(setLogInStatus(true))
  };

  const setUserInfo = (user) => {
    dispatch(setUserDetails(user))
  }

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [APIurl,] = useState('https://fitness-be-dmg.herokuapp.com/user/verify')

  const HandleVerify = () => {
    if (username === '' || password === '') {
      setError(true);
      setErrorMessage('Error: All fields must be filled in!')
    }
    else {
      fetch(APIurl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result === 'User is not verified') {
            setError(true);
            setErrorMessage('Error: User is not verified');
          } else {
            setError(false);
            setErrorMessage('');
            LogIn();
            HomeRoute();
          }
        });
    }
  };

  const handleUserDetails = () => {
    fetch(`https://fitness-be-dmg.herokuapp.com/user/get/${username}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    })
      .then((response) => response.json())
      .then((result) => {
        setUserInfo(result)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    HandleVerify();

    handleUserDetails();

  }

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className='login-container'>
        <div className="login-form">
          <form className="formbox" onSubmit={e => handleSubmit(e)}>
            <input
              type="text"
              placeholder='Username'
              value={username}
              name='username'
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type="text"
              placeholder='Password'
              value={password}
              name='password'
              onChange={e => setPassword(e.target.value)}
            />
            <button type='submit' className='btn'>
              Login!
            </button>

            <button className='btn' onClick={SignupRoute}>
              Wrong place? Sign up here!
            </button>

            <h4
              className="errorMessage"
              style={{ visibility: error ? "visible" : "hidden" }}
            >
              {errorMessage}
            </h4>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login