import React, { useState } from 'react'
import Navbar from '../home-components/navbar'
import { Link } from 'react-router-dom'
import Truncate from 'react-truncate'
import striptags from 'striptags'
import { useSelector } from 'react-redux'

const UserProfile = (props) => {
  
  const [blogs, setBlog] = useState([])
  const [username, setUsername] = useState('')
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');



  // const getBlogItems = () => {
  //   fetch(`https://fitness-be-dmg.herokuapp.com/user/get/${username}`, {

  //   })
  // };

  const User = useSelector((state) => state.user)

  console.log(User);
  
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="user-content">
        <div className="blog-container"> 

          <Truncate lines={3} ellipsis={
            <Link>Read More</Link>
          }></Truncate>
        </div>

        <div className="user-container">
          {User.username}


        </div>
      </div>
    </>
  )
}

export default UserProfile