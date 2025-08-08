import { useState, useContext, useEffect, createContext } from 'react'
import { UNSAFE_WithComponentProps, useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";
import App from './App.jsx'

import '../styles/Answer.css'

function Answer({questionCard }) {

  let [choice, setChoice] = useState('');
  let [possible, setPossible] = useState([]);
  let { playerScore, setPlayerScore } = useContext(ScoreContext);
  let [answered,setAnswered] = useState(false);

  let falseanswers = questionCard.incorrect_answers;
  let answer = questionCard.correct_answer;
  // add answer to falseanswers and shuffle
  // map falseanswers to buttons
  // each button has onClick to check if button value and answer ===
  // if matched or not do something for score


  useEffect(() => {
    setPossible([...falseanswers, answer].sort(() => Math.random() - .5))
    //setPossible((prev) => prev.sort(() => Math.random() - .5))
  }
    , [questionCard])


  // function handleScore() {
  //     setPlayerScore(prev => ++prev)
  // }
  useEffect(() => {
    if (choice == answer) {
      setPlayerScore(prev => prev + 1)
    }
  },[choice,])





  return (<>
    <div className="answer-container">
    {possible.map((elm, index) => <button name='possible_answers'  className={ "a" + index} onClick={() => {
      if(!answered){
        setChoice(elm)
        setAnswered(true)
      }
    }}>{elm}</button>)}
    </div>
    <h1 className={(choice == answer) ? 'correct' : 'wrong'} >{choice}</h1>
    <h2>{`Points: ${playerScore}`}</h2>
  </>)
}

export default Answer
