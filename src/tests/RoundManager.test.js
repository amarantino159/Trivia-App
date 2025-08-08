import { describe, test, expect, vi } from 'vitest'

import { getQuestions } from '../api/api.js'

import { RoundManager } from '../component/RoundManager.jsx'

import { render, screen } from '@testing-library/react';

describe('mocks getQuestions fetch', async () => {
	global.fetch = vi.fn()

	function createFetchResponse(data) {
		return { json: () => new Promise((resolve) => resolve(data)) }
	}

  const fetchResponse = {
		"response_code": 0,
		"results": [
			{
				"type": "boolean",
				"difficulty": "medium",
				"category": "Science: Computers",
				"question": "It&#039;s not possible to format a write-protected DVD-R Hard Disk.",
				"correct_answer": "True",
				"incorrect_answers": [
					"False"
				]
			},
			{
				"type": "multiple",
				"difficulty": "easy",
				"category": "Vehicles",
				"question": "What is the name of Nissan&#039;s most popular electric car?",
				"correct_answer": "Leaf",
				"incorrect_answers": [
					"Tree",
					"Deer",
					"Roots"
				]
			}
		]
	}
	
	const getQuestionsResponse = [
    {
      "type": "boolean",
      "difficulty": "medium",
      "category": "Science: Computers",
      "question": "It&#039;s not possible to format a write-protected DVD-R Hard Disk.",
      "correct_answer": "True",
      "incorrect_answers": [
        "False"
      ]
    },
    {
      "type": "multiple",
      "difficulty": "easy",
      "category": "Vehicles",
      "question": "What is the name of Nissan&#039;s most popular electric car?",
      "correct_answer": "Leaf",
      "incorrect_answers": [
        "Tree",
        "Deer",
        "Roots"
      ]
    }
  ]
  const amount = "2"

  fetch.mockResolvedValue(createFetchResponse(fetchResponse))
	
	const questions = await getQuestions(amount)

	test('makes a GET request to fetch questions and returns the result', async () => {

		expect(fetch).toHaveBeenCalledWith('https://opentdb.com/api.php?amount=2&&&');

		expect(questions).toStrictEqual(getQuestionsResponse)
	})
	
	test()

})