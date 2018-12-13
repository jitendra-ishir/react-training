import React, { Component } from "react";
import HelloUser from "./HelloUser";

class App extends Component {
  state = {
    firstUsername: "Jitendra",
    secondUsername: "Rakesh"
  };
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <HelloUser name={this.state.firstUsername} />
        <HelloUser name={this.state.secondUsername} />
      </div>
    );
  }
}

export default App;
