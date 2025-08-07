import { useState, useContext, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ScoreContext } from "../context/ScoreContext";
import App from './App.jsx'

import '../styles/AnswerShort.css'

function AnswerShort({ answer }) {

  let [choice, setChoice] = useState('');
  let { playerScore, setPlayerScore } = useContext(ScoreContext);
  let [answered,setAnswered] = useState(false);

  return (<>
    <input id='inputtext' type='text'></input>
    <button onClick={()=>{
      let userinput = document.getElementById('inputtext')
      if(!answered){
        setChoice(userinput.value)
        if(choice == answer){
          setPlayerScore(playerScore+1);
        }
        setAnswered(true)
      }

    }}>Submit</button>

    <h1 className={(choice == answer) ? 'correct' : 'wrong'} >{choice}</h1>
    <h2>{playerScore}</h2>
  </>)
}

export default AnswerShort
