import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'
import CharacterTabs from './components/CharacterTabs'

const herokuUrl = 'https://drageons.herokuapp.com/'
const localUrl = 'http://localhost:3000/'

class App extends Component {
  state = {characters: null, baseUrl: herokuUrl}

  async componentWillMount() {
    const url = `${this.state.baseUrl}character`
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
          <CharacterTabs character={this.state.characters[0]} baseUrl={this.state.baseUrl} createModalDescription={this.createModalDescription}/>
        </div>
      )
    }
    return <Navbar />
  }
}

export default App;
