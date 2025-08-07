import { useState,useContext,useEffect,createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import App from './App.jsx'
import Question from './Question.jsx'
import Answer from './Answer.jsx'
import AnswerShort from './AnswerShort.jsx'
import { ScoreContext } from "../context/ScoreContext"
import { RoundQuestions } from "../context/RoundQuestions"
function RoundSummary(){
  const navigate = useNavigate();
  let { playerScore, setPlayerScore } = useContext(ScoreContext);
  const { roundData, setRoundData } = useContext(RoundQuestions);

  return (<>
    <h1>Your Score is {playerScore}!</h1>
    <h2>Keep up the good work!</h2>
    <h2>You have answered {playerScore} out of {roundData.amount}! </h2>
    <h2>The next round is {roundData.category} with {roundData.difficulty} difficulty and {roundData.amount} qustions!</h2>
    <h3>Good Luck!</h3>

    <button onClick={(()=>navigate('/RoundManager'))}>Go to next Round of Questions!</button>
  </>)
}


export default RoundSummary