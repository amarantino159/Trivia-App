import React from 'react'
import { render, screen, MemoryRouter} from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../component/App.jsx'
import TitleBar from '../component/App.jsx'


import "@testing-library/jest-dom";

describe("App file", () => {
  it("renders the titlebar", () => {
    render(

        <TitleBar />

    )
    expect(screen.getByRole('heading', { name: 'Trivia!' })).toBeInTheDocument()

  })


  it('renders GameOptions on the home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )
  })


})


