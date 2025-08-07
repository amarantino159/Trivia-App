import { useState, useContext, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext"
import { RoundQuestions } from "../context/RoundQuestions";
import {GameData} from '../context/GameDataContext.js'
import '../styles/App.css'

import { GameOptions } from './GameOptions'
import QuestionAndAnswer from './QuestionAndAnswer';
import RoundSummary from './RoundSummary';
import RoundManager from './RoundManager'

function App() {
  const [roundData, setRoundData] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [gameData, setGameData ] = useState([]);

  return (
    <>
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/options">New Round</Link>
      <br></br>
      <ScoreContext.Provider value={{ playerScore, setPlayerScore }}>
        <RoundQuestions.Provider value={{ roundData, setRoundData }}>
          <GameData.Provider value={{gameData, setGameData}}>
            <Routes>
              <Route path='/' element={<GameOptions />} />
              <Route path='/options' element={<GameOptions />} />
              <Route path='/qna' element={<QuestionAndAnswer />} />
              {/* ^^not to be used in a game, just for testing purposes */}
              <Route path='/RoundSummary' element={<RoundSummary />} />
              <Route path='/RoundManager' element={<RoundManager />} />
            </Routes>
          </GameData.Provider>
        </RoundQuestions.Provider>
      </ScoreContext.Provider>
    </>
  )
}

export default App