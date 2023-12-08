import React from 'react';

function GuessInput({handleSubmitGuess}) {
  const [guess, setGuess] = React.useState('');

  return (
    <form className="guess-input-wrapper" onSubmit={e => {
      e.preventDefault();
      handleSubmitGuess(guess);
      setGuess('');
    }}>
    <label htmlFor="guess-input">Enter guess:</label>
    <input 
      id="guess-input" 
      type="text" 
      value={guess} 
      onChange={e => setGuess(e.target.value.toUpperCase())}
      required
      minLength={5}
      maxLength={5}
      pattern="[a-zA-Z]{5}"
      title="5 letter word"
      //pattern="[A-Za-z]{5}"
    />
  </form>    
  )
}

export default GuessInput;
