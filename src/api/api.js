import "./data.json";

let getQuestions = async (amount, difficulty = "", type = "", category = "") => {
  let dif = difficulty != "" ? `difficulty=${difficulty}` : "";
  let typ = type != "" ? `type=${type}` : "";
  let cat = category != "" ? `category=${category}` : "";

  let res = await fetch(`https://opentdb.com/api.php?amount=${amount}&${dif}&${typ}&${cat}`);
  let format = await res.json();
  let data = format.results;
  console.log(data);

  return data;
}

export { getQuestions }

/**
 * server => grabs all data.
 * if the server is offline, default to local data
 */