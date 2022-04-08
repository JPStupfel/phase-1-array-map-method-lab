const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials.map(x=>x.toUpperCase())
// }

// const titleCased = () => {
//   return tutorials.map(x =>   x.charAt(0).toUpperCase()  )
// }

// const titleCased = () => {
//   return tutorials.map(x =>   x.split(' ')  )
// }

const titleCased = () => {
  return tutorials.map(x => titleCaseSentence(x))
  return nestedArrays
}

//split into 2 to reduce complexity a little bit.
//take senence >> split into array of words >> map that array of words >> map function takes word and returns a string ${first letter capitalized} and rest of word using substring()}
function titleCaseSentence(sentence){
  return sentence.split(' ').map(x=> `${x[0].toUpperCase()}${x.substring(1,x.length)}`).join(' ')}