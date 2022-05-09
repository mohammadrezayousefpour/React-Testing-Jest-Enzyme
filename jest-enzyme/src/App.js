import React, { Component } from "react";
import GuessedWord from "./components/GuessWord/GuessedWord";
import Congrats from "./components/Congrats/Congrats";
import Input from "./components/Input/Input";

import { connect } from "react-redux";
import { getSecretWord } from "./Actions";
export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWord guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};
export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
