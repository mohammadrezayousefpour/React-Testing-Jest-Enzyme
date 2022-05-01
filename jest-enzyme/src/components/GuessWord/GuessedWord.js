import React from "react";
import PropTypes from "prop-types";

const GuessedWord = (props) => {
  let content;
  if (props.guessedWords.length === 0) {
    content = <span className="guessText">you should guess some words</span>;
  } else {
    content = (
      <div className="guessWordSection">
        <h3>GuessedWord</h3>
        <table className="table table-sm">
          <thead className="thead-ligth">
            <tr>
              <th>GuessedWord</th>
              <th>letterMatched</th>
            </tr>
          </thead>
          <tbody>
            {props.guessedWords.map((row, index) => (
              <tr key={index} className="eachQuessWord">
                <td>{row.guessedWord}</td>
                <td>{row.letterMatched}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
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
