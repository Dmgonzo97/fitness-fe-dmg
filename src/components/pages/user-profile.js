import React, { useState, useEffect } from 'react'
import Navbar from '../home-components/navbar'
import EditMode from '../profile-components/edit-mode'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setLogInStatus } from '../../slices/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setEditModeStatus } from '../../slices/editSlice'

const UserProfile = () => {

  const User = useSelector((state) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [blogItems, setBlogItem] = useState([])

  const editMode = useSelector((state) => state.edit.editMode)

  const HomeRoute = () => {
    navigate('/');
  }

  const CreatePostRoute = (e) => {
    e.preventDefault();

    navigate('/create-post');
  }

  const EditOnBtn = () => {
    dispatch(setEditModeStatus(true));
  };

  const LogOut = () => {
    dispatch(setLogInStatus(false));
  };

  console.log(User);

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

  const DeleteUser = (e) => {
    e.preventDefault();
    
    fetch(`https://fitness-be-dmg.herokuapp.com/user/delete/${User.id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        console.log('User Deleted!');
        LogOut();
        HomeRoute();
      })
  };

  useEffect(() => {
    getBlogItems();
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

                  <div className="EditMode-container">

                    <div className="title">
                      <h3>Edit Profile</h3>
                    </div>

                    <div className="icon">
                      <FontAwesomeIcon className='fa' icon='fa-solid fa-user-gear' onClick={EditOnBtn} />
                    </div>

                  </div>

                  <div className="delete-container">

                    <div className="title">
                      <h3>Delete Profile</h3>
                    </div>


                    <div className="icon">
                      <FontAwesomeIcon className='fa' icon='fa-solid fa-arrow-right-from-bracket' onClick={DeleteUser}/>
                    </div>

                  </div>

                  <div className="create-post-container">

                    <button className='btn' onClick={CreatePostRoute}>Create Post!</button>

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