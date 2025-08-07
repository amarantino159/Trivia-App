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


function TitleBar() {
  return (
    <div className="main-header" >
      <h1>Trivia!</h1>
      <nav className="header" >
        <Link to="/"><span>Home</span>
          <span>Home</span>
          <span>Home</span>
          <span>Home</span>
        </Link>
          <br></br>
        <Link to="/options"><span>New Round</span>
          <span>New Round</span>
          <span>New Round</span>
          <span>New Round</span>
        </Link>
          <br></br>
        </nav>
    </div>
    )
}




function App() {
  const [roundData, setRoundData] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [gameData, setGameData ] = useState([]);

  return (
    <>
            <section className="main-container" >
  <div class='air air1'></div>
  <div class='air air2'></div>
  <div class='air air3'></div>
  <div class='air air4'></div>
      </section>
      <TitleBar/>

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