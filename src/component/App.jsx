import { useState, useContext, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext"
import '../styles/App.css'

import QuestionAndAnswer from './QuestionAndAnswer';

function App() {

  const [playerScore, setPlayerScore] = useState(0);

  return (
    <>
      <Link to="/">Home</Link>
      <ScoreContext.Provider value={{ playerScore, setPlayerScore }}>
        <Routes>
          {/* <Route path='/' element={<GameOptions/>}/> */}
          <Route path='/' element={<QuestionAndAnswer />} />
        </Routes>
      </ScoreContext.Provider>
    </>
  )
}

export default App