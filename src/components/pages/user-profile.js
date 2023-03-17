import React, { useState, useEffect } from 'react'
import Navbar from '../home-components/navbar'
import EditMode from '../edit-mode'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setLogInStatus } from '../../slices/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UserProfile = () => {

  const User = useSelector((state) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [blogItems, setBlogItem] = useState([])
  const [editMode, setEditMode] = useState(false)

  const LogOut = () => {
    dispatch(setLogInStatus(false))
  }

  console.log(User);
  console.log(User.blogs);
  console.log(User.id);

  const getBlogItems = () => {
    fetch(`https://fitness-be-dmg.herokuapp.com/blog/get/${User.id}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    })
      .then((response) => response.json())
      .then((results) => {
        setBlogItem(results)
        console.log(blogItems);
      })
  };

  useEffect(() => {
    getBlogItems()
  }, [])


  const displayBlogs = blogItems.map(blog => {
    return (
      <>
        <div className="blog-title">
          <h3>{blog.blog_name}</h3>
        </div>
        <div className="blog-content">
          <p>{blog.blog_text}</p>
        </div>
      </>
    )
  })

  return (
    <>
      {
        editMode
          ?
          (
            <EditMode />
          )
          :
          (
            <>
              <div className="navbar">
                <Navbar />
              </div>

              <div className="user-content">
                <div className="blog-container">
                  <div>{displayBlogs}</div>
                </div>

                <div className="user-container">
                  <div className="name">
                    <h3>Username:</h3>
                    <h5>{User.username}</h5>
                  </div>

                  <div className="EditMode-btn">
                    <FontAwesomeIcon className='fa' icon='fa-solid fa-user-gear' />
                  </div>

                  <div className="logOut-btn">
                    <FontAwesomeIcon className='fa' icon='fa-solid fa-arrow-right-from-bracket' />
                  </div>

                </div>
              </div>
            </>
          )
      }
    </>
  )
}

export default UserProfile