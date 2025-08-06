import { useState,useContext,useEffect,createContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import App from './App.jsx'
import Question from './Question.jsx'
import Answer from './Answer.jsx'

function QuestionAndAnswer(){

  return (<>
    <Question questionText={'Where is the Eiffel Tower?'}/>
    <Answer answer={'Paris'} falseanswers={['London','Dubai','Los Angeles','Miami']} />

  </>)
}

export default QuestionAndAnswer
