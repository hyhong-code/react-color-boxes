import React, { Component } from "react";
import "./Panel.css";
import Box from "./Box";

class Panel extends Component {
  static defaultProps = {
    numBoxes: 18,
    allColors: [
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
  }

  render() {
    return (
      <div className="Panel">
        {Array.from({ length: this.props.numBoxes }).map((box) => (
          <Box colors={this.props.allColors} />
        ))}
      </div>
    );
  }
}

export default Panel;
