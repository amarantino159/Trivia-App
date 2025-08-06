import "./data.json";

let getQuestions = async (amount, difficulty = "", type = "", category = "") => {
  let dif = difficulty != "" ? `difficulty=${difficulty}` : "";
  let typ = type != "" ? `type=${type}` : "";
  let cat = category != "" ? `category=${category}` : "";

  let res = await fetch(`https://opentdb.com/api.php?amount=${amount}&${dif}&${typ}&${cat}`);
  //need to check for code 5 rate limit error
  let format = await res.json();
  let error = format.response_code;

  //if error = 0, then continue. If 5, then default to local data
  if (error === 5) {
    let local = require('./data.json');
    let data = local.filter((element) => (element.difficulty === difficulty || difficulty === "") &&
      (element.type === type || type === "") &&
      (element.category === category || category === ""));

    return data.slice(0, amount);
  } else {
    let data = format.results;

    return data;
  }

}

export { getQuestions }

/**
 * server => grabs all data.
 * if the server is offline, default to local data
 */