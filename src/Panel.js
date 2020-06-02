import React, { Component } from "react";
import "./Panel.css";
import Box from "./Box";

class Panel extends Component {
  static defaultProps = {
    colors: [
      "#ff9595",
      "#ffcb74",
      "#faeee7",
      "#efee9d",
      "#ffcbcb",
      "#303960",
      "#bc658d",
      "#ff427f",
      "#c060a1",
      "#f1d1d1",
    ],
  };
  render() {
    return (
      <div className="Panel">
        <Box onClick={this.handleClick} color="#f1d1d1" />
      </div>
    );
  }
}

export default Panel;
