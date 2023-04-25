import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import Navbar from '../home-components/navbar'


export default function Signup() {

  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [APIurl,] = useState('https://fitness-be-dmg.herokuapp.com/user/add')


  let LoginRoute = () => {
    navigate('/login')
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== ConfirmPassword) {
      setError(true);
      setErrorMessage('Error: Passwords must match!');
    } else {
      fetch(APIurl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          username: username,
          password: password
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result === 'Error: Username Already Exist') {
            setError(true);
            setErrorMessage('Error: Username Already Exist');
          } else {
            setError(false);
            setErrorMessage('');
            LoginRoute();
          }
        })
        .catch((error) => {
          console.log('Account Creation Error', error);
          setError(true);
          setErrorMessage('Error with account creation, retry please!')
        });
    }
  };

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="signup-container">
        <div className="signup-form">
          <form className='formbox' onSubmit={handleSubmit}>
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
              username='password'
              onChange={e => setPassword(e.target.value)}
            />

            <input
              type="text"
              placeholder='Confirm Password'
              value={ConfirmPassword}
              name='confirmPassword'
              onChange={e => setConfirmPassword(e.target.value)}
            />
            <button type='submit' className='btn'>
              Sign Up!
            </button>

            <button className='btn' onClick={LoginRoute}>
              Wrong place? Login Here!
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
};