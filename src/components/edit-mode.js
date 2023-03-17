import React, { useState } from 'react'
import Navbar from './home-components/navbar'
import { setEditModeStatus } from '../slices/editSlice'
import { useDispatch } from 'react-redux'

export const EditMode = () => {

  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [ConfirmUsername, setconfirmUsername] = useState('')
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [APIUrl] = useState()

  const EditOffBtn = () => {
    dispatch(setEditModeStatus(false))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

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
      fetch('https://fitness-be-dmg.herokuapp.com/user/update')
    }
  }

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="update-user-container">
        <div className="user-form">
          <form className='formbox'>
            <input
              type="text"
              placeholder='Username'
              value={username}
              name='username'

            />

            <input
              type="text"
              placeholder='Confirm Username'
              value={ConfirmUsername}
              name='confirm username'

            />

            <input
              type="text"
              placeholder='Password'
              value={password}
              name='password'

            />

            <input
              type="text"
              placeholder='Confirm Password'
              value={ConfirmPassword}
              name='confirm username'

            />

            <button className='btn' >
              Update User!
            </button>
          </form>
        </div>
      </div>

      <div className="editMode-btn">
        <button onClick={EditOffBtn}>Return</button>
      </div>
    </>
  )
}

export default EditMode