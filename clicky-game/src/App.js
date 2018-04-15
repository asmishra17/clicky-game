import React, { Component } from "react";
import Square from "./components/square";
import "./App.css";
import princess from "./princess.json"

class App extends Component {
  state = {
    princess: princess
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game <i class="fas fa-chess-queen"></i></h1>
        </header>
        {this.state.princess.map(princess => (<Square key = {princess.id} alt = {princess.name} src = {princess.image}/>))}
      </div>
    );
  }
}

export default App;
