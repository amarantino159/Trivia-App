import { useState,useContext,useEffect,createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import App from './App.jsx'

function Question({questionText}){

  return (<>
    <h1>{questionText}</h1>

  </>)
}

export default Question
