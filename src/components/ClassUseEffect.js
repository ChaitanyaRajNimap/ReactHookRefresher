import React, { Component } from "react";

class ClassUseEffect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    document.title = `Cliked ${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `Cliked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassUseEffect;
