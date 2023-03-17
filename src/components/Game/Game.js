import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Banner from "../Banner/Banner";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesList, setGuessesList] = React.useState([]);
  const [gameStatus, seGameStatus] = React.useState("running"); // running, won, lost

  function addGuess(guess) {
    const newList = [...guessesList, checkGuess(guess, answer)];
    setGuessesList(newList);

    if (guess === answer) {
      seGameStatus("won");
    } else if (newList.length >= NUM_OF_GUESSES_ALLOWED) {
      seGameStatus("lost");
    }
  }

  return (
    <>
      <GuessResults guessesList={guessesList} />
      <GuessInput addGuess={addGuess} disabled={gameStatus !== "running"} />
      {gameStatus !== "running" && (
        <Banner
          type={gameStatus}
          answer={answer}
          numberOfGuesses={guessesList.length}
        />
      )}
    </>
  );
}

export default Game;
