

function TextCorrect(text) {
  let input = text;
  let correctedText = input.replace(/[^a-zA-Z0-9]/g, "");

  return correctedText;
}



export { TextCorrect }