import { useState, useContext, useEffect, createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import App from './App.jsx'
import Question from './Question.jsx'
import Answer from './Answer.jsx'
import AnswerShort from './AnswerShort.jsx'

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

function QuestionAndAnswer({ questionCard, handleClick }) {
  const [currentQuestion, setCurrentQuestion] = useState(questionCard);

  useEffect(() => {
    setCurrentQuestion(questionCard);
  }, [questionCard])

  if (currentQuestion.type == 'boolean' || currentQuestion.type == 'multiple') {
    return (<>
      <Question questionText={currentQuestion.question} />
      <Answer answer={currentQuestion.correct_answer} falseanswers={currentQuestion.incorrect_answers} />
      <button onClick={handleClick}>Next</button>
    </>)
  }
  else if (currentQuestion.type == 'short') {
    return (<>
      <Question questionText={currentQuestion.question} />
      <AnswerShort answer={currentQuestion.correct_answer} />
      <button onClick={handleClick}>Next</button>

    </>)
  }
  else {
    return (<>
      <Question questionText={'Where is the Eiffel Tower?'} />
      <Answer answer={'Paris'} falseanswers={['London', 'Dubai', 'Los Angeles', 'Miami']} />
      <button onclick={() => handleClick()}>Next</button>
    </>)
  }


}

export default QuestionAndAnswer
