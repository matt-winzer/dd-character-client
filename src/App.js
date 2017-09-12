import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Character from './components/Character'
import HeaderMenu from './components/HeaderMenu'

class App extends Component {
  state = {characters: null}

  async componentWillMount() {
    const url = 'http://localhost:3000/character'
    const response = await fetch(url)
    const json = await response.json()
    this.setState({
      characters: json
    })
  }

  render() {
    if (this.state.characters) {
      return (
        <div>
          <HeaderMenu />
          <Character character={this.state.characters[0]}/>
        </div>
      )
    }
    return <HeaderMenu />
  }
}

export default App;
