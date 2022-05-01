import React from "react";
import classes from "./Congrats.module.css";
import PropTypes from "prop-types";

const Congrats = (props) => {
  if (props.success) {
    return (
      <div className={classes.Congrats}>
        <span className={classes.successText}>
          Congratolation! you guessed the word
        </span>
      </div>
    );
  } else {
    return <div className={classes.Congrats}></div>;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
