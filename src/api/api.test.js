import { vi, expect, it, test, describe } from "vitest";
import { getQuestions } from "./api.js";

describe('Server to pull random data', async () => {

  test('Should pull random data', async () => {
    let testData = await getQuestions(2);
    console.log(testData);
    expect(testData.length).toBe(2);
  })
})