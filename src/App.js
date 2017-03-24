import React, { Component } from 'react';
import 'whatwg-fetch'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {items: []};
  }
  componentWillMount() {

    fetch('http://swapi.co/api/people/?format=json')
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({'items':items}) )
  }

  filter(e) {
    this.setState({'filter': e.target.value});
  }

  render() {

    let items = this.state.items;
    if (this.state.filter) {
      items = items.filter((item) =>
        item.name.toLowerCase()
          .includes(this.state.filter.toLowerCase())
      );
    }

    return (
      <div className="App">
        <input type="text" onChange={this.filter.bind(this)}/>
        {items.map((item, key) =>
            <Person key={item.name} person={item} />)}
      </div>
    );
  }
}

const Person = (props) => <h4>{props.person.name}</h4>;

export default App;
