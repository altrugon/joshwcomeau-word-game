import React from "react";

function GuessesList({ guessesList }) {
  return (
    <div className="guess-results">
      {guessesList.map((guess) => (
        <p className="guess" key={crypto.randomUUID()}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default GuessesList;
