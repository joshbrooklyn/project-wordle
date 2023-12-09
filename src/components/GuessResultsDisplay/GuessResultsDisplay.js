import React from 'react';
import Guess from '../Guess';
import {range} from '../../utils';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

function GuessResultsDisplay({guesses, answer}) {
  
  //const numRowsToAdd = NUM_OF_GUESSES_ALLOWED - guesses.length;
  //const extraRows = range(0, NUM_OF_GUESSES_ALLOWED - guesses.length, 1); 
  //const rows = [...guesses, ...extraRows];
  
  return (
    <div className="guess-results">
    {
      range(NUM_OF_GUESSES_ALLOWED).map( num => (
        <Guess value={guesses[num]} key={num} answer={answer}/>
      ))
    }
    </div>
  )
}

export default GuessResultsDisplay;
