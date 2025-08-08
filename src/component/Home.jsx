import trivia from '../assets/trivia.png'
import "../styles/Home.css"

function Home() {

  return (
    <>
      <img src={trivia} className="trivia-logo" />
      <br />
      <label>All material provided under Creative Common liscense from the Open Trivia Database</label>
      <br />
      <label>Please visit their site below for more information</label>
      <br />
      <label><a href="https://opentdb.com/">Open Trivia Database</a></label>

    </>
  )
}

export { Home }