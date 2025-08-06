import { useState, useContext, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";
import App from './App.jsx'

import '../styles/Answer.css'

function Answer({ answer, falseanswers }) {

  let [choice, setChoice] = useState('');
  let [possible, setPossible] = useState([]);
  let { playerScore, setPlayerScore } = useContext(ScoreContext);

  // add answer to falseanswers and shuffle
  // map falseanswers to buttons
  // each button has onClick to check if button value and answer ===
  // if matched or not do something for score


  useEffect(() => {
    setPossible([...falseanswers, answer])
    setPossible((prev) => prev.sort(() => Math.random() - .5))
  }
    , [])


  return (<>
    {possible.map((elm) => <button onClick={() => {
      setChoice(elm)

    }}>{elm}</button>)}
    <h1 className={(choice == answer) ? 'correct' : 'wrong'} >{choice}</h1>

  </>)
}

export default Answer
