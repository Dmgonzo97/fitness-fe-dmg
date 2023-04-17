import React, { useState } from 'react'
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";
import 'draft-js/dist/Draft.css';

const RichTextEditor = () => {

  const initialState = EditorState.createEmpty();
  const [editorState, setEditorState] = useState(initialState);
  
  return (
    <div>
      <Editor
      editorState={editorState}
      wrapperClassName='demo-wrapper'
      editorClassName='demo-editor'
      
      />
    </div>
  )
}

export default RichTextEditor