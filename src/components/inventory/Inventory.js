import React from 'react';
import { Container, Grid } from 'semantic-ui-react'

import Spinner from '../Spinner'
import CharacterHeader from '../character/CharacterHeader'

const Inventory = (props) => {
  if (props.character) {
    return (
      <Container className='main-content'>
        <CharacterHeader name={props.character.name}
                level={props.character.level}
                _class={props.character.class.name}
                race={props.character.race}/>

      </Container>
    )
  }
  return <Spinner />
}

export default Inventory;
