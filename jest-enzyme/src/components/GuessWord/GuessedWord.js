import React from "react";
import PropTypes from "prop-types";

const GuessedWord = (props) => {
  let content;
  if (props.guessedWords.length === 0) {
    content = <span className="guessText">you should guess some words</span>;
  }
  return <div className="guessedWordsComponent">{content}</div>;
};
GuessedWord.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatched: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessedWord;
