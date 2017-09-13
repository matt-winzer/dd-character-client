import React from 'react';
import { Container, Grid } from 'semantic-ui-react'

import Spinner from '../Spinner'
import CharacterHeader from '../character/CharacterHeader'
import Weapons from './Weapons'

const Inventory = (props) => {
  if (props.character) {
    return (
      <Container className='main-content'>
        <CharacterHeader name={props.character.name}
                level={props.character.level}
                _class={props.character.class.name}
                race={props.character.race}/>
        <Weapons weapons={props.character.weapons}/>
      </Container>
    )
  }
  return <Spinner />
}

export default Inventory;
