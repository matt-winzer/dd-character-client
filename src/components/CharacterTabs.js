import React, { Component } from 'react';
import { Container, Tab } from 'semantic-ui-react'

import Spinner from './Spinner'
import CharacterHeader from './CharacterHeader'
import Inventory from './inventory/Inventory'
import Character from './character/Character'
import Combat from './combat/Combat'

class CharacterTabs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      character: null,
      characterId: props.characterId,
      editMode: false,
      savingData: false
    }
  }

  async componentWillMount() {
    const url = `${this.props.baseUrl}character/${this.state.characterId}`
    const response = await fetch(url)
    const json = await response.json()
    this.setState({
      ...this.state,
      character: json[0]
    })
  }

  addToInventory = (itemId, itemName) => {
    const characterId = this.props.characterId
    const itemPath = itemName.slice(0, -1)
    const url = `${this.props.baseUrl}character/${characterId}/${itemPath}`

    console.log(itemPath);
    //
    // const options = {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     character_id: characterId,
    //     weapon_id: itemId,
    //   })
    // }
    //
    // this.setState({
    //   ...this.state,
    //   savingData: true
    // })
    //
    // fetch(url, options)
    //   .then(response => response.json())
    //   .then(response => {
    //     this.setState({
    //       ...this.state,
    //       savingData: false,
    //       itemAdded: true
    //     })
    //   })
    //   .catch(err => {
    //   console.log(err)
    // })
  }

  removeFromInventory = (itemId, itemName) => {
    const characterId = this.props.characterId
    let newCharacter = this.state.character
    const itemPath = itemName.slice(-1)
    console.log(itemPath)
    const newItems = this.state.character[itemName].filter(item => {
      return item.id !== itemId
    })
    newCharacter[itemName] = newItems
    const url = `${this.props.baseUrl}character/${characterId}/weapon/${itemId}`
    const options = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    this.setState({
      ...this.state,
      savingData: true
    })

    fetch(url, options)
      .then(response => response.json())
      .then(response => {
        this.setState({
          ...this.state,
          savingData: false,
          itemAdded: true,
          character: newCharacter
        })
      })
      .catch(err => {
      console.log(err)
    })

  }

  render() {
    const panes = [
      { menuItem: 'Character', render: () => <Tab.Pane><Character character={this.state.character}
                                                                  baseUrl={this.props.baseUrl}
                                                                  createModalDescription={this.props.createModalDescription}/></Tab.Pane>},
      { menuItem: 'Inventory', render: () => <Tab.Pane><Inventory character={this.state.character}
                                                                  baseUrl={this.props.baseUrl}
                                                                  removeFromInventory={this.removeFromInventory}
                                                                  addToInventory={this.addToInventory}/>
                                                                  </Tab.Pane> },
      { menuItem: 'Combat', render: () => <Tab.Pane><Combat character={this.state.character}
                                                            baseUrl={this.props.baseUrl}
                                                            createModalDescription={this.props.createModalDescription}/></Tab.Pane> },
    ]

    if (this.state.character) {
      return (
        <Container className='main-content'>
          <CharacterHeader  name={this.state.character.name}
                            level={this.state.character.level}
                            _class={this.state.character.class.name}
                            race={this.state.character.race}/>
          <Tab panes={panes} defaultActiveIndex={1}/>
        </Container>
      )
    }

    return <Spinner />
  }


}

export default CharacterTabs
