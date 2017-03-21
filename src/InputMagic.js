import React, { Component } from 'react';

class InputMagic extends Component {
  constructor() {
    super();
    this.state = {a:''}
  }

  update(e) {
    this.setState({a:e.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" name="name" onChange={this.update.bind(this)} /> {this.state.a}
      </div>
    )
  }
}

export default InputMagic;
