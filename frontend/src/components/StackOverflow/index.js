import React from 'react'
import './css/index.css'
import Main from './Main'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Index() {
   const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuestion() {
      await axios.get("/api/question").then((res) => {
        setQuestions(res.data.reverse());
        // console.log(res.data)

      }).catch((err)=>{
        console.log(err);
      });
    }
    getQuestion();
  }, []);
  return (
    <div className='stack-index'>
      <div className='stack-index-content'>
        <Sidebar/>
        <Main questions={questions}/>
      </div>
    </div>
  )
}

export default Index
