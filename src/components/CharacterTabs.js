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
  }


  render() {
    const panes = [
      { menuItem: 'Character', render: () => <Tab.Pane><Character character={this.props.character} baseUrl={this.props.baseUrl} createModalDescription={this.props.createModalDescription}/></Tab.Pane>},
      { menuItem: 'Inventory', render: () => <Tab.Pane><Inventory character={this.props.character} baseUrl={this.props.baseUrl} removeFromInventory={this.props.removeFromInventory}/></Tab.Pane> },
      { menuItem: 'Combat', render: () => <Tab.Pane><Combat character={this.props.character} baseUrl={this.props.baseUrl} createModalDescription={this.props.createModalDescription}/></Tab.Pane> },
    ]

    if (this.props.character) {
      return (
        <Container className='main-content'>
          <CharacterHeader  name={this.props.character.name}
                            level={this.props.character.level}
                            _class={this.props.character.class.name}
                            race={this.props.character.race}/>
          <Tab panes={panes} defaultActiveIndex={1}/>
        </Container>
      )
    }

    return <Spinner />
  }


}

export default CharacterTabs
