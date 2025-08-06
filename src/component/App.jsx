import { useState, useContext, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext"
import { RoundQuestions } from "../context/RoundQuestions";
import '../styles/App.css'

import { GameOptions } from './GameOptions'
import QuestionAndAnswer from './QuestionAndAnswer';

function App() {
  const [roundData, setRoundData] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/options">New Round</Link>
      <ScoreContext.Provider value={{ playerScore, setPlayerScore }}>
        <RoundQuestions.Provider value={{ roundData, setRoundData }}>

          <Routes>
            <Route path='/options' element={<GameOptions />} />
            <Route path='/' element={<QuestionAndAnswer />} />
          </Routes>

        </RoundQuestions.Provider>
      </ScoreContext.Provider>
    </>
  )
}

export default App