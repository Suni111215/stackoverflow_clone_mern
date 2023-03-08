import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' // quill css
import './Question.css';
// import { TagsInput } from "react-tag-input-component";
import {TagsInput} from 'react-tag-input-component'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { selectUser } from "../../features/userSlice";
import { useSelector } from "react-redux";
import axios from 'axios';


function Question() {


  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(false)
  const [title, setTitle]= useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([])
  const navigate = useNavigate()

  const handleQuill =(value)=>{setBody(value)}

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    if (title !== "" && body !== "") {
      setLoading(true)
      const bodyJSON = {
        title: title,
        body: body,
        tag: JSON.stringify(tags),
        user: user,
      };
      await axios.post("/api/question", bodyJSON)
        .then((res) => {
          // console.log(res.data);
          alert("Question added successfully");
          setLoading(false)
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
          setLoading(false)
        });
    }
  };
  
  return (
    <div className='add-question'>
      <div className='add-question-container'>
        <div className='head-title'>
          <h1>Ask a Public question</h1>
        </div>
        <div className='question-container'>
        <div className='question-options'>
          <div className='question-option'>
            <div className='title'>
              <h3>Title</h3>
              <small>Be specific and imaging you're asking a question to another person</small>
              <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Add question title" />
            </div>
          </div>
          <div className='question-option'> <div className='title'>
            <h3>Body</h3>
            <small>Introduce the problem and expand on what you put in the title. Minimum 20 characters.</small>
            <ReactQuill value={body} onChange={handleQuill} className='react-quill' theme='snow' />
           
          </div></div>
          <div className='question-option'>
            <div className='title'>
              <h3>tags</h3>
              <small>Add up to 5 tags to describe what your question is about. Start typing to see suggestions.</small>

              <TagsInput name="tags" value={tags} onChange={setTags} placeholder='Enter a tag' />
             
             
              
              
           </div>
          </div>
        </div>
      </div>
      {/* <button type='submit' className='button' onChange={handleSubmit}>Submit</button> */}
      <button disabled ={loading} className='button' type="submit" onClick={handleSubmit}>{
        loading ? "Adding Question...." : "Add your question"
      }</button>
    </div>
    </div>
   
  )
  
}

export default Question;
