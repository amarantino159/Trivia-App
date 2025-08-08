import { vi, expect, it, test, describe } from "vitest";
import { render, screen , fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import AnswerShort  from "../component/AnswerShort.jsx";

const dummyS = {
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



describe('check if inputs are made',()=>{
  test('check if 1 button is made ',()=>{
    render(<AnswerShort questionCard={dummyS.correct_answer} />);
    let btns = screen.getAllByRole('button');
    // console.log(btns);
    expect(btns.length).toBe(1)
    expect(btns[0].innerHTML).toBe('Submit')
  });
  test('check if text input',()=>{
    render(<AnswerShort questionCard={dummyS.correct_answer} />);
    let box = screen.getAllByRole('textbox');
    expect(box).toBeDefined(1)

  });
  test('check if clicking works',async () => {
    render(<AnswerShort questionCard={dummyS.correct_answer} />);
    let btns = screen.getAllByRole('button');
    let box = screen.getAllByRole('textbox');

    //await userEvent.click(box);
    // await fireEvent.change(box[0], {target: {innerHTML: 'Testarossa'}})
    await userEvent.click(btns[0]);
    let h = screen.getAllByRole('heading');
    console.log(h[0].innerHTML)
    expect(h[0].className).toBeOneOf(['correct' , 'wrong'])
  });

});