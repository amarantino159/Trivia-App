import React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Question from '../component/Question.jsx'
import "@testing-library/jest-dom";

describe("question", () => {
  it("renders the question", () => {
    render(<Question questionText={"whats up"} />)
    expect(screen.getByText("whats up")).toBeInTheDocument();
  })
})
