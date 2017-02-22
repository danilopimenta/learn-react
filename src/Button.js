import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

  render() {
    console.log();
    let color = this.props.color;
    return <button className={`button color-${color}`} name="button"> {this.props.children} </button>;
  }
}

Button.defaultProps = {
  color: 'default'
};

export default Button;
