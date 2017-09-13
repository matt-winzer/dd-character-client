import React from 'react';
import { Container, Grid } from 'semantic-ui-react'

import Spinner from '../Spinner'
import CharacterHeader from '../character/CharacterHeader'
import Weapons from './Weapons'
import Items from './Items'

const Inventory = (props) => {
  if (props.character) {
    return (
      <Container className='main-content'>
        <CharacterHeader name={props.character.name}
                level={props.character.level}
                _class={props.character.class.name}
                race={props.character.race}/>
        <Weapons weapons={props.character.weapons}/>
        <Items items={props.character.items}/>
      </Container>
    )
  }
  return <Spinner />
}

export default Inventory;
