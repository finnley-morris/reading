import React from "react";
import { useState, useEffect } from "react";
import { useSettingsContext } from "../../contexts/Settings";
import { getWords } from "../../utils/wordBankFunctions";
import { Box, Container, Grid2 } from "@mui/material";

const WordSearch = () => {
  const { activitySettings } = useSettingsContext();
  const { gridSize, wordLength } = activitySettings;
  const [wordCount, setWordCount] = useState(0);
  const [words, setWords] = useState([]);
  const [unfoundWords, setUnfoundWords] = useState([]);
  const [searchWord, setSearchWord] = useState({ word: "", index: 0 });
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [radioButtons, setRadioButtons] = useState([]);

  const clearSelectedLetters = () => {
    setSelectedLetters([]);
  };

  const handleLetterSelect = (wordIndex, letterIndex, letter, e) => {
    if (selectedLetters.length === 0) {
      if (letter === searchWord.word[0]) {
        setSelectedLetters([...selectedLetters, letter]);
        setRadioButtons([...radioButtons, e.target.name]);
      } else {
        clearSelectedLetters();
      }
    } else {
      if (
        letter === searchWord.word[selectedLetters.length] &&
        selectedLetters.length < searchWord.word.length
      ) {
        setSelectedLetters([...selectedLetters, letter]);
        setRadioButtons([...radioButtons, e.target.name]);
      } else {
        console.log("out of order");
        clearSelectedLetters();
        let newRadioButtons = [...radioButtons];
        for (let i = 0; i < wordLength; i++) {
          newRadioButtons = newRadioButtons.filter(
            (radioButton) => radioButton !== `${wordIndex}-${i}`
          );
        }
        setRadioButtons(newRadioButtons);
      }
    }
    const testString = selectedLetters;
    testString.push(letter);
    if (testString.join("") === searchWord.word) {
      const newUnfoundWords = [...unfoundWords];
      newUnfoundWords.splice(searchWord.index, 1);
      setUnfoundWords(newUnfoundWords);
      clearSelectedLetters();
    }
  };

  useEffect(() => {
    const newWordCount = gridSize * wordLength * 2;
    const newWords = getWords(wordLength, newWordCount);
    let randomNum = Math.floor(Math.random() * newWordCount - 1);
    setUnfoundWords(newWords);
    setSearchWord({ word: newWords[randomNum], index: randomNum });
    setWords(newWords);
  }, [gridSize, wordLength, wordCount]);

  useEffect(() => {
    console.log(unfoundWords);
    let randomNum = Math.floor(Math.random() * unfoundWords.length - 1);
    setSearchWord({ word: unfoundWords[randomNum], randomNum });
  }, [unfoundWords]);

  useEffect(() => {
    console.log(selectedLetters);
    console.log(radioButtons);
  }, [selectedLetters, radioButtons]);

  return (
    <div>
      {searchWord.word}
      <form style={{ width: "100%" }}>
        <Grid2 size={12} container columns={gridSize * wordLength*2}>
          {words.map((word, wordIndex) => {
            console.log(gridSize * wordLength, wordLength);
            const wordArray = word.split("");
            return (
              <Grid2 size={wordLength*2} key={wordIndex} display={"flex"}>
                {wordArray.map((letter, letterIndex) => {
                  return (
                    <div key={letterIndex}>
                      {letter}
                      <input
                        key={letterIndex}
                        type="radio"
                        value={words[wordIndex][letterIndex]}
                        name={`${wordIndex}-${letterIndex}`}
                        checked={radioButtons.includes(
                          `${wordIndex}-${letterIndex}`
                        )}
                        onChange={(e) => {
                          handleLetterSelect(wordIndex, letterIndex, letter, e);
                        }}
                      />
                    </div>
                  );
                })}
              </Grid2>
            );
          })}
        </Grid2>
      </form>
    </div>
  );
};

export default WordSearch;
