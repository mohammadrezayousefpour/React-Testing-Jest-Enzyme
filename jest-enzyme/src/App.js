import React, { Component } from "react";
import GuessedWord from "./components/GuessWord/GuessedWord";
import Congrats from "./components/Congrats/Congrats";
class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWord
          guessedWords={[
            {
              guessedWord: "train",
              letterMatched: 3,
            },
            {
              guessedWord: "agile",
              letterMatched: 1,
            },
            {
              guessedWord: "party",
              letterMatched: 5,
            },
          ]}
        />
      </div>
    );
  }
}

export default App;
