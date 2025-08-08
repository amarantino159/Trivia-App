import { vi, expect, it, test, describe } from "vitest";
import { useState } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event'
import Answer from "../component/Answer.jsx";
import { ScoreContext } from "../context/ScoreContext";

const dummyM = {
  // "type": "short",
  "type": "multiple",
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
const dummyT = {
  "type": "boolean",
  "difficulty": "medium",
  "category": "Geography",
  "question": "The flag of South Africa features 7 colours.",
  "correct_answer": "False",
  "incorrect_answers": [
    "True"
  ]
};



describe('check if buttons are made for multiple choice', () => {
  test('check if 4 buttons are made for multiple choice', () => {
    render(<Answer questionCard={dummyM} />);
    let btns = screen.getAllByRole('button');
    // console.log(btns);
    expect(btns.length).toBe(4)
  });
  test('check if the 4 options are rendered', () => {
    render(<Answer questionCard={dummyM} />);
    let btns = screen.getAllByRole('button');
    // console.log(btns);
    btns.forEach(elm => expect(elm.innerHTML).toBeOneOf(["Testarossa", "Enzo Ferrari", "F40", "288 GTO"]));
  });
  test('check if clicking works', async () => {
    render(<Answer questionCard={dummyM} />);
    let btns = screen.getAllByRole('button');
    waitFor(() => userEvent.click(btns[0]));
    let h = screen.getAllByRole('heading');
    expect(h[0].className).toBeOneOf(['correct', 'wrong'])
    // expect(h[1].innerHTML).toBeOneOf(['0' , '1'])
  });
});

describe('check if buttons are made for true/false choice', () => {
  test('check if 2 buttons are made', () => {
    render(<Answer questionCard={dummyT} />);
    let btns = screen.getAllByRole('button');
    // console.log(btns);
    expect(btns.length).toBe(2)
  });
  test('check if the 2 options are rendered', () => {
    render(<Answer questionCard={dummyT} />);
    let btns = screen.getAllByRole('button');
    // console.log(btns);
    btns.forEach(elm => expect(elm.innerHTML).toBeOneOf(["False", "True"]));
  });
  test('check if clicking works', async () => {
    const [playerScore, setPlayerScore] = useState(0);
    render(<ScoreContext.Provider value={{ playerScore, setPlayerScore }}><Answer questionCard={dummyT} /></ScoreContext.Provider>);
    let btns = screen.getAllByRole('button');
    await userEvent.click(btns[0]);
    let h = screen.getAllByRole('heading');
    expect(h[0].className).toBeOneOf(['correct', 'wrong'])
    // expect(h[1].innerHTML).toBeOneOf(['0' , '1'])
  });
});