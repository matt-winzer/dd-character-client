import React from 'react';
import { Container } from 'semantic-ui-react'

import Spinner from './Spinner'
import CharacterHeader from './CharacterHeader'
import CharacterAttributes from './CharacterAttributes'


const Character = (props) => {

  if (props.character) {
    return (
      <div className='main-content'>
        <CharacterHeader  name={props.character.name}
                          level={props.character.level}
                          _class={props.character.class.name}
                          race={props.character.race}/>
        <Container className='main-content' text>
          <CharacterAttributes  background={props.character.background}
                                alignment={props.character.alignment}
                                age={props.character.age}
                                sex={props.character.sex}
                                height={props.character.height}
                                weight={props.character.weight}
                                hairColor={props.character.hair_color}
                                eyeColor={props.character.eye_color}
                                skinColor={props.character.skin_color}/>
        </Container>
      </div>
    )
  }

  return <Spinner />
}

export default Character;
