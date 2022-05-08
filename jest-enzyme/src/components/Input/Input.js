import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from "../../Actions";

class Input extends Component {
  render() {
    console.log(this.props);
    const content = this.props.success ? null : (
      <>
        <input className="inputBox"></input>
        <button className="submitButton">submit</button>
      </>
    );
    return <div className="InputContainer">{content}</div>;
  }
}

const mapStateToProps = ({ success }) => {
  return { success };
};
export default connect(mapStateToProps, { guessWord })(Input);
