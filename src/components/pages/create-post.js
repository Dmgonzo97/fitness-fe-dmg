import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Editor } from '@tinymce/tinymce-react';
import DOMPurify from 'dompurify';
import Navbar from '../home-components/navbar'
import { useSelector } from 'react-redux';

export default function CreatePost() {

  const User = useSelector((state) => state.user);

  let navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [APIurl,] = useState('https://fitness-be-dmg.herokuapp.com/blog/add')


  const ReturnRoute = (e) => {
    e.preventDefault();
    navigate('/userprofile');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const purifiedContent = DOMPurify.sanitize(content)

    if (title === '' && content === '') {
      setError(true);
      setErrorMessage('Please fill in the blanks');
    } else {
      fetch(APIurl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          blog_name: title,
          blog_text: purifiedContent,
          blog_user_id: User.id
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          setError(true);
          setErrorMessage('Blog created!');
        });
    }
  }

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="creation-container">
        <div className="post-form">

          <form className='formbox' onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder='Blog Title'
              value={title}
              name='blogTitle'
              onChange={e => setTitle(e.target.value)}
            />

            <Editor
              apiKey='1o3abb2lzrxr3cucy2st89v24w6xuelauctwxok3jimy3ok2'
              value={content}
              onEditorChange={(content) => setContent(content)}
              init={{
                selector: 'textarea#default'
              }}
            />

            <button className='create-post-btn' type='submit'>
              Create Post!
            </button>

            <h4
              className="errorMessage"
              style={{ visibility: error ? "visible" : "hidden" }}
            >
              {errorMessage}
            </h4>

            <button className='create-post-btn' onClick={ReturnRoute}>Return</button>
          </form>

        </div>
      </div>
    </>
  )
}