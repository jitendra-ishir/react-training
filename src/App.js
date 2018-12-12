import React, { Component } from "react";
import HelloUser from "./HelloUser";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <HelloUser name="Jitendra" />
        <HelloUser name="Rakesh" />
      </div>
    );
  }
}

export default App;
