import React from 'react';
import { Grid } from 'semantic-ui-react'

import Spinner from '../Spinner'
import Abilities from './abilities/Abilities'
import Attributes from './attributes/Attributes'
import Personality from './personality/Personality'
import Proficiencies from './proficiencies/Proficiencies'
import Skills from './skills/Skills'

const Character = (props) => {
  if (props.character) {
    return (
      <Grid stackable>
        <Grid.Row columns={3}>
          <Grid.Column>
            <Skills   id={props.character.id}
                      baseUrl={props.baseUrl}
                      skills={props.character.skills}/>
          </Grid.Column>
          <Grid.Column>
            <Abilities  id={props.character.id}
                        baseUrl={props.baseUrl}
                        abilities={props.character.abilities}
                        createModalDescription={props.createModalDescription}/>
            <Proficiencies proficiencies={props.character.proficiencies}/>
          </Grid.Column>
          <Grid.Column>
            <Personality  id={props.character.id}
                          baseUrl={props.baseUrl}
                          traits={props.character.personality_traits}
                          ideals={props.character.ideals}
                          bonds={props.character.bonds}
                          flaws={props.character.flaws}/>
            <Attributes id={props.character.id}
                        baseUrl={props.baseUrl}
                        background={props.character.background}
                        alignment={props.character.alignment}
                        age={props.character.age}
                        sex={props.character.sex}
                        height={props.character.height}
                        weight={props.character.weight}
                        hairColor={props.character.hair_color}
                        eyeColor={props.character.eye_color}
                        skinColor={props.character.skin_color}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
  return <Spinner />
}

export default Character;
