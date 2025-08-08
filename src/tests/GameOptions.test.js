import { vi, expect, it, test, describe, beforeEach } from "vitest";
import { GameOptions, GenerateQuestions } from "../component/GameOptions.jsx";
import { getQuestions } from "../api/api.js";


describe('GameOptions Test Functions', async () => {
  beforeEach(async () => {

    vi.mock('../api/api.js', { spy: true })
    //const roundSpy = vi.spyOn(setRoundData)
  })
  test('Should generate a call to the getQuestions API', async () => {
    //const questionSpy = vi.spyOn(GameOptions, 'GenerateQuestions');
    const mockData = {
      amount: 2,
      difficulty: "",
      type: "",
      category: ""
    }
    GenerateQuestions(mockData);
    expect(getQuestions).toHaveBeenCalled();
    //expect(roundSpy).toHaveBeenCalled();
  })
  test('Should set RoundData', async () => {
    // let testData = await getQuestions(2);
    // console.log(testData);
    // expect(testData.length).toBe(2);
  })
})