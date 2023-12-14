import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResultsDisplay from '../GuessResultsDisplay';
import Banner from '../Banner';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState({Status:"InProgress", guessCount:0});

  function handleSubmitGuess(guess) {
    let gameResult = "";
    const guessCount = guesses.length + 1;

    if (guess === answer) {
      gameResult = "Win";
    } else if (guessCount === 6) {
      gameResult = "Lose";
    }

    const nextGameStatus = {Status: gameResult, guessCount: guessCount};

    setGuesses([...guesses, guess]);
    setGameStatus(nextGameStatus);
  }

  return (
  <>
  <GuessResultsDisplay guesses={guesses} answer={answer}/>
  <GuessInput handleSubmitGuess={handleSubmitGuess}/>
  <Banner gameStatus = {gameStatus} answer={answer}/>
  </>
  )
}

export default Game;
