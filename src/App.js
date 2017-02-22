import React, { Component } from 'react';
import Button from './Button';
import Header from './Header';
import DangerButton from './DangerButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DangerButton />
        <Button> Click me only :| </Button>
      </div>
    );
  }
}

export default App;
