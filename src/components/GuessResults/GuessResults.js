import React from "react";
import { range } from "../../utils";
import Guess from "../Guess/Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessesList }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess
          key={num}
          guess={
            typeof guessesList[num] === "undefined" ? "" : guessesList[num]
          }
        />
      ))}
    </div>
  );
}

export default GuessResults;
