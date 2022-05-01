import React from "react";
import classes from "./Congrats.module.css";

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

export default Congrats;
