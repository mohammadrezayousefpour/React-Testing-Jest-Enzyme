import React, { Component } from "react";
import { connect } from "react-redux";
class Input extends Component {
  render() {
    return <div>Input</div>;
  }
}

const mapStateToProps = () => {
  return {};
};
export default connect(mapStateToProps)(Input);
