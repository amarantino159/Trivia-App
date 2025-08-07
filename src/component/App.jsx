import { useState, useContext, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext"
import { RoundQuestions } from "../context/RoundQuestions";
import '../styles/App.css'

import { GameOptions } from './GameOptions'
import QuestionAndAnswer from './QuestionAndAnswer';
import RoundSummary from './RoundSummary';

function App() {
  const [roundData, setRoundData] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);

  return (
    <>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/options">New Round</Link>
      <br></br>
      <ScoreContext.Provider value={{ playerScore, setPlayerScore }}>
        <RoundQuestions.Provider value={{ roundData, setRoundData }}>

          <Routes>
            <Route path='/' element={<GameOptions />} />
            <Route path='/options' element={<GameOptions />} />
            <Route path='/qna' element={<QuestionAndAnswer />} />
            {/* ^^not to be used in a game, just for testing purposes */}
            <Route path='/RoundSummary' element={<RoundSummary />} />
            <Route path='/RoundManager' element={<RoundSummary />} />
          </Routes>

        </RoundQuestions.Provider>
      </ScoreContext.Provider>
    </>
  )
}

export default App