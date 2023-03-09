import React, { useState } from 'react'
import Navbar from '../home-components/navbar'
import Truncate from 'react-truncate'

const UserProfile = () => {
  
  // getBlogItem() {
  //   fetch()
  // }
  
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="user-content">
        <div className="blog-container">
          blog container
        </div>

        <div className="user-container">
          user container
        </div>
      </div>
    </>
  )
}

export default UserProfile