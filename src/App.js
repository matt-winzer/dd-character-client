import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Test from './components/Test'

class App extends Component {
  state = {characters: null}

  componentDidMount() {
    const url = 'http://localhost:3000/character'
    // const response = await fetch(url)
    // const json = await response.json()
    // this.setState({
    //   characters: json
    // })

    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(characters => {
        console.log('char', characters);
        this.setState({
          characters: characters
        })
        console.log(this.state.characters);
      })

  }

  render() {
    // console.log(this.state.characters);
    if (this.state.characters) {
      return <Test character={this.state.characters[0]}/>
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
