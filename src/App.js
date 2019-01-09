import React, { Component } from 'react';
import './App.css';
import Crypto from './components/Crypto';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Walt's Crypto List</h2>
        </div>
        <Crypto />
      </div>
    );
  }
}

export default App;
