import { useState,useContext,useEffect,createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

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

function QuestionAndAnswer({ questionCard = dummy }) {

  if(questionCard.type == 'boolean'||questionCard.type=='multiple')
  {
    return (<>
    <Question questionText={questionCard.question}/>
    <Answer answer={questionCard.correct_answer} falseanswers={questionCard.incorrect_answers} />
      <button  >Next</button>
    </>)
  }
  else if(questionCard.type =='short'){
    return (<>
    <Question questionText={questionCard.question}/>
      <AnswerShort answer={questionCard.correct_answer} />
      <button  >Next</button>

    </>)
  }
  else{
    return (<>
    <Question questionText={'Where is the Eiffel Tower?'}/>
      <Answer answer={'Paris'} falseanswers={['London', 'Dubai', 'Los Angeles', 'Miami']} />
      <button  >Next</button>
    </>)
  }


}

export default QuestionAndAnswer
