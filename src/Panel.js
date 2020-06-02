import React, { Component } from "react";
import "./Panel.css";
import Box from "./Box";

class Panel extends Component {
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
    let boxes = Array.from({ length: this.props.numBoxes });
    boxes = boxes.map((box) => {
      const idx = Math.floor(Math.random() * this.props.colors.length);
      return this.props.colors[idx];
    });
    this.state = {
      boxes: boxes,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const idx = Math.floor(Math.random() * this.props.colors.length);
    e.target.style.backgroundColor = this.props.colors[idx];
  }

  render() {
    return (
      <div className="Panel">
        {this.state.boxes.map((color, i) => (
          <Box key={i} onClick={(e) => this.handleClick(e)} color={color} />
        ))}
      </div>
    );
  }
}

export default Panel;
