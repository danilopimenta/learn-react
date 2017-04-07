import React, { Component } from 'react';
import 'whatwg-fetch'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {items: [], width: 0};
  }
  componentWillMount() {

    fetch('http://swapi.co/api/people/?format=json')
      .then( response => response.json() )
      .then( ({results: items}) => this.setState({'items':items}) )
  }

  componentDidMount() {
  this.setState(
    {width: window.innerWidth},
    () => {
      window.addEventListener(
        "resize",
        ({target}) => this.setState({width: target.innerWidth})
      )
    }
  )
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
        <Width>
        {minWidth =>
        this.state.width > minWidth
          ? <div> more {minWidth} </div>
          : <div> less {minWidth} </div>
        }
        </Width>
        {items.map((item, key) =>
            <Person key={item.name} person={item} />)}
      </div>
    );
  }
}

const Person = (props) => <h4>{["Mrs. ", <span key='span' >{props.person.name}</span>, "!"]}</h4>;

const Width = ({ children }) => children(700);

export default App;
