import React, { useState } from 'react'
import Navbar from '../home-components/navbar'
import { setEditModeStatus } from '../../slices/editSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setUserDetails } from '../../slices/userSlice';


export const EditMode = () => {

  const dispatch = useDispatch();

  const User = useSelector((state) => state.user)

  const [username, setUsername] = useState('');
  const [ConfirmUsername, setConfirmUsername] = useState('')
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [APIUrl] = useState(`https://fitness-be-dmg.herokuapp.com/user/update/${User.id}`)

  const EditOffBtn = () => {
    dispatch(setEditModeStatus(false))
  }

  const setUserInfo = (user) => {
    dispatch(setUserDetails(user))
  }

  const handleUpdate = () => {
    if (username === '' || ConfirmUsername === '') {
      setError(true)
      setErrorMessage('Error: All Fields must be filled out!')
    } else if (username !== ConfirmUsername) {
      setError(true)
      setErrorMessage('Error: Usernames must MATCH')
    } else if (password === '' || ConfirmPassword === '') {
      setError(true)
      setErrorMessage('Error: All Fields must be filled out!')
    } else if (password !== ConfirmPassword) {
      setError(true)
      setErrorMessage('Error: Passwords must MATCH')
    } else {
      fetch(APIUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          new_username: username,
          new_password: password
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result === 'User not found') {
            setError(true);
            setErrorMessage('User not found')
          } else {
            setUserInfo(result)
            setError(true);
            setErrorMessage('Success! User Edited!');
          }
        })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    handleUpdate();
  }

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="update-user-container">
        <div className="user-form">
          <form className='formbox' onSubmit={e => handleSubmit(e)}>
            <input
              type="text"
              placeholder='Username'
              value={username}
              name='username'
              onChange={e => setUsername(e.target.value)}
            />

            <input
              type="text"
              placeholder='Confirm Username'
              value={ConfirmUsername}
              name='confirm username'
              onChange={e => setConfirmUsername(e.target.value)}
            />

            <input
              type="text"
              placeholder='Password'
              value={password}
              name='password'
              onChange={e => setPassword(e.target.value)}
            />

            <input
              type="text"
              placeholder='Confirm Password'
              value={ConfirmPassword}
              name='confirm username'
              onChange={e => setConfirmPassword(e.target.value)}
            />

            <button className='btn'>
              Update User!
            </button>

            <button onClick={EditOffBtn}>Return</button>

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

export default EditMode