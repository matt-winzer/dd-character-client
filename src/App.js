import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'
import CharacterTabs from './components/CharacterTabs'

const herokuUrl = 'https://drageons.herokuapp.com/'
const localUrl = 'http://localhost:3000/'

class App extends Component {
  state = {characters: null, baseUrl: localUrl}

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

  removeFromInventory = (itemId, itemName) => {
    const newItems = this.state.characters[0][itemName].filter(item => {
      return item.id !== itemId
    })
    let newCharacter = this.state.characters[0]
    newCharacter[itemName] = newItems
    console.log(newItems)
    console.log('itemId ', itemId);
    console.log('itemName ', itemName);
    console.log(newCharacter);
    this.setState({
      ...this.state,
      characters: [newCharacter]
    })
  }

  render() {
    if (this.state.characters) {
      return (
        <div>
          <Navbar />
          <CharacterTabs  character={this.state.characters[0]}
                          baseUrl={this.state.baseUrl}
                          createModalDescription={this.createModalDescription}
                          removeFromInventory={this.removeFromInventory}/>
        </div>
      )
    }
    return <Navbar />
  }
}

export default App;
