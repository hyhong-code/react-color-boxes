import React, { Component } from "react";
import "./Box.css";
import { choice } from "./helpers";

class Box extends Component {
  static defaultProps = {
    numBoxes: 18,
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

  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.colors) };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {}

  render() {
    return (
      <div className="Box" style={{ backgroundColor: this.state.color }}>
        onClick={this.handleClick}
        Box
      </div>
    );
  }
}

export default Box;
