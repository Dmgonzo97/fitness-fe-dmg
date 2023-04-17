import React, { useState } from 'react'
import RichTextEditor from '../blog-components/rich-text-editor';
import Navbar from '../home-components/navbar'

export default function CreatePost() {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // const onChange = (evt) => SetBlogContent(evt.target.blogContent);

  const TextEditorChange = () => {
    setContent()
  }

  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>

      <div className="creation-container">

        <div className="creat-post-form">
          <form className='formbox'>

            <input
              type="text"
              placeholder='Blog Title'
              value={title}
              name='blogTitle'
              onChange={e => setTitle(e.target.value)}
            />

            <RichTextEditor TextEditorChange={TextEditorChange} />

          </form>
        </div>

      </div>
    </>
  )
}