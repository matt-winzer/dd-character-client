import React from 'react';
import { Container, Tab } from 'semantic-ui-react'

import Spinner from './Spinner'
import CharacterHeader from './CharacterHeader'
import Inventory from './inventory/Inventory'
import Character from './character/Character'
import Combat from './combat/Combat'

const CharacterTabs = (props) => {
  const panes = [
    { menuItem: 'Character', render: () => <Tab.Pane><Character character={props.character} baseUrl={props.baseUrl} createModalDescription={props.createModalDescription}/></Tab.Pane>},
    { menuItem: 'Inventory', render: () => <Tab.Pane><Inventory character={props.character} baseUrl={props.baseUrl}/></Tab.Pane> },
    { menuItem: 'Combat', render: () => <Tab.Pane><Combat character={props.character} baseUrl={props.baseUrl}/></Tab.Pane> },
  ]

  if (props.character) {
    return (
      <Container className='main-content'>
        <CharacterHeader  name={props.character.name}
                          level={props.character.level}
                          _class={props.character.class.name}
                          race={props.character.race}/>
        <Tab panes={panes} />
      </Container>
    )
  }
  return <Spinner />
}

export default CharacterTabs
