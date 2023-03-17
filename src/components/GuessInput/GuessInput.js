import React from "react";

function GuessInput({ addGuess }) {
  const [guess, setGuess] = React.useState("");

  function onChangeHandler(event) {
    setGuess(event.target.value.toUpperCase());
  }

  function onSubmitHandler(event) {
    event.preventDefault();
    console.log({ guess });
    setGuess("");
    addGuess(guess);
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmitHandler}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={guess}
        onChange={onChangeHandler}
        pattern="[a-zA-Z]{5}" // minLength using pattern
      />
      <div className="help-text">Introduce a 5 character word</div>
    </form>
  );
}

export default GuessInput;
