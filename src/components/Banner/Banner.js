import React from 'react';

function Banner( {gameStatus, answer} ) {
  console.log(gameStatus);

  if (gameStatus.Status === "Win") {
    return (
      <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{gameStatus.guessCount} guesses</strong>.
      </p>
    </div>
    )
  }
  else if (gameStatus.Status === "Lose") {
    return (
      <div className="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>      
    )
  }
}

export default Banner;
