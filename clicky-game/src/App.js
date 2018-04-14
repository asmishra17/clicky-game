import React, { Component } from 'react';
import Square from './components/square';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Game (insert crown)</h1>
        </header>
        <Square />
      </div>
    );
  }
}

export default App;
