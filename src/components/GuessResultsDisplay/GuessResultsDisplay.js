import React from 'react';
import {range} from '../../utils';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants';

function GuessResultsDisplay({guesses}) {
  
  const numRowsToAdd = NUM_OF_GUESSES_ALLOWED - guesses.length;
  const extraRows = range(0, NUM_OF_GUESSES_ALLOWED - guesses.length, 1); 
  
  return (
    <div className="guess-results">
    {
      guesses.map( ({guess, id}) => {
        const chars = guess.split('');
        return (
          <p class="guess" key={id}>
            <span className="cell">{chars[0]}</span>
            <span className="cell">{chars[1]}</span>
            <span className="cell">{chars[2]}</span>
            <span className="cell">{chars[3]}</span>
            <span className="cell">{chars[4]}</span>
          </p>
        )
      })
    }

    {
      extraRows.map( (index) => (
        <p class="guess" key={index}>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
        </p>
      ))
    }
    </div>
  )
}

export default GuessResultsDisplay;
