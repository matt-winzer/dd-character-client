import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Character from './components/character/Character'
import Navbar from './components/Navbar'
import Inventory from './components/inventory/Inventory'

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

  createModalDescription(descriptionArray) {
    return descriptionArray.map(description => {
      return <p key={description.substring(15, 20)}>{description}</p>
    })
  }

  render() {
    if (this.state.characters) {
      return (
        <div>
          <Navbar />
          <Character character={this.state.characters[0]} createModalDescription={this.createModalDescription}/>
          <Inventory character={this.state.characters[0]}/>
        </div>
      )
    }
    return <Navbar />
  }
}

export default App;
