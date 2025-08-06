const express = require('express');
const app = express();
const port = 3001;
//const data = require('./Data/Classes.js');
const cors = require('cors');

app.use(cors())

app.get('/questions', (req, res) => {
  res.status(200).json();
  console.log("received request for classes")
})


async function getData(amount, difficulty, type, category) {
  let dif = difficulty ? `difficulty=${difficulty}` : "";
  let typ = type ? `type=${type}` : "";
  let cat = category ? `category=${category}` : "";

  let res = await fetch(`https://opentdb.com/api.php?amount=${amount}&${dif}&${typ}&${cat}`);
  let data = await res.json();

  return data;
}


app.listen(port, () => {
  console.log('Trivia Server listening on port ' + port);
})
module.exports = app;