import { useState, useEffect, useContext } from 'react'
import { getQuestions } from '../api/api.js'
import { RoundQuestions } from '../context/RoundQuestions'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuestionAndAnswer from './QuestionAndAnswer';
import '../styles/App.css'

function RoundManager() {
  const { roundData } = useContext(RoundQuestions);
  let [questionCount, setQuestionCount] = useState(0);
  let [currentQuestion, setCurrentQuestion] = useState(roundData[0]);

  const [roundLength, setRoundLength] = useState(roundData.length);
  /**for each question in roundData,
   * generate a single questionandanswer component.
   * Once question is finished,
   * show a different questionandanswercomponenet */

  useEffect(() => {
    setCurrentQuestion(roundData[questionCount]);

  }, [questionCount])

  function NextQuestion() {
    console.log('going to next question')
    questionCount < roundLength ? setQuestionCount(questionCount++) : RoundSummary();
  }

  function RoundSummary() {
    //goto Round Summary page
  }

  console.log(roundData)
  console.log(roundData[currentQuestion])




  return (
    <>

      <QuestionAndAnswer questionCard={currentQuestion} handleClick={NextQuestion} key={questionCount} />




    </>
  )
}

export default RoundManager