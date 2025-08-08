import { describe, test, expect, vi } from 'vitest'

import { RoundSummary } from '../component/RoundSummary.jsx'

import { RoundManager } from '../component/RoundManager.jsx'

import { render, screen } from '@testing-library/react';

describe('RoundSummary', () => {
	//SET CONTEXTS AND USESTATES HERE???
  it('renders a RoundSummary', () => {
    // render(<>
		// 	<h1>Your Score is {playerScore}!</h1>
		// 	<h2>Keep up the good work!</h2>
		// 	<h2>You have answered {playerScore} out of {roundData.length}! </h2>
		// 	{/* <h2>The next round is {roundData[0].category} with {roundData[0].difficulty} difficulty and {roundData.length} questions!</h2> */}
			
		// 	{/* make new context that preserves the user options for future reference */}
		// 	<h3>Good Luck!</h3>
		// 	<button onClick={(() => {setPlayerScore(0); navigate('/RoundManager')})}>Go to next Round of Questions!</button>
		// </>);
    // const childElement = screen.getByText("Bill");
    // expect(childElement).toBeInTheDocument();
  })
})