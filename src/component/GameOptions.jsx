import { useState, useEffect, useContext } from 'react'
import { getQuestions } from '../api/api.js'
import { RoundQuestions } from '../context/RoundQuestions'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import '../styles/App.css'


//user inputs options in a form and then generates a list of questions
//need amount (no less than 1), difficulty, type, and category
function GameOptions() {
  const { roundData, setRoundData } = useContext(RoundQuestions);

  async function GenerateQuestions(formData) {
    const amount = formData.get('amount');
    const difficulty = formData.get('difficulty');
    const type = formData.get('type');
    const category = formData.get('category');;

    let data = await getQuestions(amount, difficulty, type, category);
    console.log(data);
    setRoundData(data);
  }

  return (
    <>
      <form action={GenerateQuestions}>
        <label>Number of Questions:</label><input type="text" name="amount" />
        <label>Difficulty:</label><select name="difficulty">
          <option value="">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <label>Type:</label><select name="type">
          <option value="">All</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True/False</option>
        </select>
        <label>Category:</label><select name="category">
          <option value="">All</option>

          <option value="9">General Knowledge</option>
          <option value="10">Entertainment: Books</option>
          <option value="11">Entertainment: Film</option>
          <option value="12">Entertainment: Music</option>
          <option value="13">Entertainment: Musicals & Theaters</option>
          <option value="14">Entertainment: Television</option>
          <option value="15">Entertainment: Video Games</option>
          <option value="16">Entertainment: Board Games</option>
          <option value="17">Science and Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Entertainment: Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Entertainment: Japanese Anime & Manga</option>
          <option value="32">Entertainment: Cartoon & Animations</option>
        </select>
        <button type="submit">Start Quiz!</button>
      </form>
    </>
  )
}

export { GameOptions }