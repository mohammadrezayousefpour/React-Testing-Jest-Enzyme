import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from "../../Actions";

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: null,
    };
  }

  submitGuessWord = (e) => {
    e.preventDefault();
    const guessedWord = this.state.currentGuess;
    if (guessedWord && guessedWord.length > 0) {
      this.props.guessWord(guessedWord);
    }
  };
  render() {
    const content = this.props.success ? null : (
      <>
        <input
          className="inputBox"
          value={this.state.currentGuess}
          onChange={(e) => this.setState({ currentGuess: e.target.value })}
        ></input>
        <button
          className="submitButton"
          onClick={(e) => this.submitGuessWord(e)}
        >
          submit
        </button>
      </>
    );
    return <div className="InputContainer">{content}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};
export default connect(mapStateToProps, { guessWord })(UnconnectedInput);
