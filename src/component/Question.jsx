import { useState,useContext,useEffect,createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../styles/Question.css"

import App from './App.jsx'

function Question({questionText}){

  return (<>
    <h1 className="question" >{questionText}</h1>

  </>)
}

export default Question
