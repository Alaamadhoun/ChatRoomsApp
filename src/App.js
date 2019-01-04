import React, { Component } from "react";
import "./App.css";
import MessageList from "./components/MessageList";

class App extends Component {
  render() {
    return (
      <div>
        <h1>This is Main</h1>
        <MessageList />
      </div>
    );
  }
}

export default App;
