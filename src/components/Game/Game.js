import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesList, setGuessesList] = React.useState([]);

  function addGuess(guess) {
    setGuessesList([...guessesList, checkGuess(guess, answer)]);
  }

  return (
    <>
      <GuessResults guessesList={guessesList} />
      <GuessInput addGuess={addGuess} />
    </>
  );
}

export default Game;
