import React, { Component } from 'react';
import Logo from './Logo';
import './Header.css';

class Header extends Component {
  render () {
    return (
      <div className="App-header">
        <Logo />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}

export default Header;
