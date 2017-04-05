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
            <PersonString key={item.name} person={item} />)}
      </div>
    );
  }
}

const PersonFunction = (props) => <h4>{ ((name) => name)(props.person.name) }</h4>;
const PersonArray = (props) => <h4>{["Mrs. ", <span>{props.person.name}</span>, "!"]}</h4>;
const PersonString = (props) => <h4>{props.person.name}</h4>;

export default App;
