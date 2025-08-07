import { useState, useContext, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";
import App from './App.jsx'

import '../styles/Answer.css'

function Answer({questionCard, answer, falseanswers }) {

  let [choice, setChoice] = useState('');
  let [possible, setPossible] = useState([]);
  let { playerScore, setPlayerScore } = useContext(ScoreContext);


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
  },[choice])



  return (<>
    <div className="answer-container">
    {possible.map((elm, index) => <button className={ "a" + index} onClick={() => {
      setChoice(elm)
      // if(choice == answer){
      //   handleScore()

      // };
    }}>{elm}</button>)}
    </div>
    <h1 className={(choice == answer) ? 'correct' : 'wrong'} >{choice}</h1>
    <h2>{playerScore}</h2>
  </>)
}

export default Answer
