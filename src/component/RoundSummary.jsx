import { useState, useContext, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../styles/RoundSummary.css'

import App from './App.jsx'
import Question from './Question.jsx'
import Answer from './Answer.jsx'
import AnswerShort from './AnswerShort.jsx'
import { ScoreContext } from "../context/ScoreContext"
import { RoundQuestions } from "../context/RoundQuestions"
import {GameData} from '../context/GameDataContext.js'





function RoundSummary() {
  const navigate = useNavigate();
  let { playerScore, setPlayerScore } = useContext(ScoreContext);
  const { roundData, setRoundData } = useContext(RoundQuestions);
  const { gameData, setGameData } = useContext(GameData);


  useEffect(() => {
    setGameData([...gameData, playerScore]);
  }, []);



  return (<>
    <h1 className="summary-main" >Your Score is {playerScore}!</h1>
    <h2>Keep up the good work!</h2>
    <h2>You have answered {playerScore} out of {roundData.length}! </h2>
    {/* <h2>The next round is {roundData[0].category} with {roundData[0].difficulty} difficulty and {roundData.length} questions!</h2> */}

    {/* make new context that preserves the user options for future reference */}
    <h3 className="goodluck" >Good Luck!</h3>
    <button onClick={(() => {setPlayerScore(0); navigate('/RoundManager')})}>Go to next Round of Questions!</button>
  </>)
}


export default RoundSummary