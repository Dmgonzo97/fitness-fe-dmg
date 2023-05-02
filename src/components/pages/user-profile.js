import React, { useState, useEffect } from 'react'
import Navbar from '../home-components/navbar'
import EditMode from '../profile-components/edit-mode'
import parse from 'html-react-parser';
import he from 'he';
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { setEditModeStatus } from '../../slices/editSlice'


const UserProfile = () => {

  const User = useSelector((state) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [blogItems, setBlogItem] = useState([])

  const editMode = useSelector((state) => state.edit.editMode)

  const CreatePostRoute = (e) => {
    e.preventDefault();
    navigate('/create-post');
  }

  const delConfirmRoute = (e) => {
    e.preventDefault();
    navigate('/delConfirm')
  }

  const EditOnBtn = () => {
    dispatch(setEditModeStatus(true));
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
  }, [User.id]);

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
                    <h4>{User.username}</h4>
                  </div>

                  <div className="EditMode">
                    <h3>Edit Profile</h3>
                    <FontAwesomeIcon className='fa' icon='fa-solid fa-user-gear' onClick={EditOnBtn} />
                  </div>

                  <div className="delete">
                    <h3>Delete Profile</h3>
                    <FontAwesomeIcon className='fa' icon='fa-solid fa-delete-left' onClick={delConfirmRoute} />
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