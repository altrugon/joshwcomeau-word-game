import React from "react";

function Banner({ type, answer, numberOfGuesses }) {
  let output = undefined;

  if (type === "won") {
    output = (
      <div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in{" "}
          <strong>
            {numberOfGuesses} {numberOfGuesses == 1 ? "guess" : "guesses"}
          </strong>
          .
        </p>
      </div>
    );
  } else if (type === "lost") {
    output = (
      <div className="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  }

  return output;
}

export default Banner;
