import React, { Component } from "react";
import "./Box.css";

class Box extends Component {
  render() {
    return (
      <div
        onClick={this.props.onClick}
        style={{ backgroundColor: this.props.color }}
        className="Box"
      >
        Box
      </div>
    );
  }
}

export default Box;
