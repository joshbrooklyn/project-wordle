import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess( {value, key, answer} ) {
  const checkedLetters = checkGuess(value, answer);
  
  return (
    <p className="guess" key={key}>
      {
        range(5).map ( num => {
          let classString;

          if (value) { 
            classString = `cell ${checkedLetters[num].status}`;            
          } else {
            classString = 'cell';
          }

          return (
            <span className={ classString }>
              { value ? checkedLetters[num].letter : undefined }
            </span>
          )
        })
      }      
    </p>  
  )
}

export default Guess;
