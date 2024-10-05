import { wordBank } from '../constants/wordBank';
export const getWords = (length, numWords) => {
  const wordsCopy = [...wordBank[length]];
  const selectedWords = [];
  for (let i = 0; i < numWords; i++) {
    const randomIndex = Math.floor(Math.random() * wordsCopy.length);
    selectedWords.push(wordsCopy.splice(randomIndex, 1)[0]);
  }
  return selectedWords;
};

console.log(getWords(3, 5));