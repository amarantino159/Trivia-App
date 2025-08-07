import { useState, useEffect, useContext } from 'react'
import { getQuestions } from '../api/api.js'
import { RoundQuestions } from '../context/RoundQuestions'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QuestionAndAnswer } from './QuestionAndAnswer';
import '../styles/App.css'

function RoundManager() {
  const { roundData } = useContext(RoundQuestions);
  /**for each question in roundData,
   * generate a single questionandanswer component.
   * Once question is finished,
   * show a different questionandanswercomponenet */

  const questionCount = roundData.length;
  const currentQuestion = 0;

  function NextQuestion() {
    currentQuestion < questionCount ? currentQuestion += 1 : RoundSummary();

  }

  function RoundSummary() {
    //goto Round Summary page
  }




  return (
    <>

      <QuestionAndAnswer questionCard={roundData[currentQuestion]} handleClick={NextQuestion} />




    </>
  )
}