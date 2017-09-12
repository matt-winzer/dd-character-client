import React from 'react';
import { Container } from 'semantic-ui-react'

import Spinner from './Spinner'
import CharacterHeader from './CharacterHeader'


const Test = (props) => {

  if (props.character) {
    return (
      <div className='main-content'>
        <CharacterHeader />
        <Container className='main-content' text>
          <p>{props.character.name}</p>
          <p>{props.character.race}</p>
          <p>{props.character.background}</p>
          <p>{props.character.alignment}</p>
          <p>{props.character.class.name}</p>
        </Container>
      </div>
    )
  }

  return <Spinner />
}

export default Test;
