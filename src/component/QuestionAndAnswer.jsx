import { useState, useContext, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "../styles/QuestionAndAnswer.css"

import App from './App.jsx'
import Question from './Question.jsx'
import Answer from './Answer.jsx'
import AnswerShort from './AnswerShort.jsx'
import TextCorrect from './TextCorrect'

const dummy = {
  "type": "short",
  // "type": "multiple",
  "difficulty": "medium",
  "category": "Vehicles",
  "question": "Which of these cars is NOT considered one of the 5 Modern Supercars by Ferrari?",
  "correct_answer": "Testarossa",
  "incorrect_answers": [
    "Enzo Ferrari",
    "F40",
    "288 GTO"
  ]
};

function QuestionAndAnswer({ questionCard, handleClick, key }) {
  // const [currentQuestion, setCurrentQuestion] = useState(questionCard);

  // useEffect(() => {
  //   setCurrentQuestion(questionCard);
  // }, [questionCard])
  console.log(questionCard);
  if (questionCard.type == 'boolean' || questionCard.type == 'multiple') {
    return (<>
      <Question key={key} questionText={TextCorrect(questionCard.question)} />
      <Answer key={key} questionCard={questionCard} answer={questionCard.correct_answer} falseanswers={questionCard.incorrect_answers} />
      <button className="button-next" onClick={() => handleClick((prev) => prev + 1)}>Next</button>
    </>)
  }
  else if (questionCard.type == 'short') {
    return (<>
      <Question key={key} questionText={TextCorrect(questionCard.question)} />
      <AnswerShort key={key} questionCard={questionCard} answer={questionCard.correct_answer} />
      <button onClick={() => handleClick((prev) => prev + 1)}>Next</button>


    </>)
  }
  else {
    return (<>
      <Question questionText={'Where is the Eiffel Tower?'} />
      <Answer answer={'Paris'} falseanswers={['London', 'Dubai', 'Los Angeles', 'Miami']} />
      <button className="button-next"  onclick={() => handleClick((prev) => ++prev)}>Next</button>
    </>)
  }


}

export default QuestionAndAnswer
