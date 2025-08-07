import he from 'he';

function TextCorrect(text) {
  let input = text;

  let correctedText = he.decode(input);
  // let correctedText = input.replace(/&amp;/g, '&')
  //   .replace(/&lt;/g, '<')
  //   .replace(/&gt;/g, '>')
  //   .replace(/&quot;/g, '"')
  //   .replace(/&#039;/g, "'")
  //   .replace(/&amp;/g, "&");

  return correctedText;
}



export default TextCorrect