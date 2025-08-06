import { useState,useContext,useEffect,createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import '../styles/App.css'

import QuestionAndAnswer from './QuestionAndAnswer';

function App() {


  return (
    <>
    <Link to="/">Home</Link>

    <Routes>
      {/* <Route path='/' element={<GameOptions/>}/> */}
      <Route path='/' element={<QuestionAndAnswer />}/>
    </Routes>
    </>
  )
}

export default App
