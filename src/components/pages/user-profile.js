import React, { useState, useEffect } from 'react'
import Navbar from '../home-components/navbar'
import EditMode from '../profile-components/edit-mode'
import parse from 'html-react-parser';
import he from 'he';
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

  const DeleteUser = (e) => {
    e.preventDefault();

    fetch(`https://fitness-be-dmg.herokuapp.com/user/delete/${User.id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' }
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('User Deleted!');
        LogOut();
        HomeRoute();
      })
  };

  useEffect(() => {

    const getBlogItems = async () => {
      try {
        const response = await fetch(`https://fitness-be-dmg.herokuapp.com/blog/get/${User.id}`);
        const data = await response.json();
        setBlogItem(data);
      } catch (error) {
        console.error(error);
      }
    };

    getBlogItems();
  }, []);

  console.log(blogItems);

  const displayBlogs = blogItems.map((blog, i) => {
    return (
      <div className="blog-items" key={i}>
        <div className="blog-title">
          <h3>{blog.blog_name}</h3>
        </div>
        <div className="blog-content">
          {parse(he.decode(blog.blog_text))}
        </div>
      </div>
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

                  <div className="EditMode">
                    <h3>Edit Profile</h3>
                    <FontAwesomeIcon className='fa' icon='fa-solid fa-user-gear' onClick={EditOnBtn} />
                  </div>

                  <div className="delete">
                    <h3>Delete Profile</h3>
                    <FontAwesomeIcon className='fa' icon='fa-solid fa-delete-left' onClick={DeleteUser} />
                  </div>

                  <div className="create-post">
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