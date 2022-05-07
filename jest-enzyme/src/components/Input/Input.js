import React, { Component } from "react";
import { connect } from "react-redux";
class Input extends Component {
  render() {
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
export default connect(mapStateToProps)(Input);
