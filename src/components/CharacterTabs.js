import React from 'react';
import { Container, Grid, Tab } from 'semantic-ui-react'

import Spinner from './Spinner'
import CharacterHeader from './CharacterHeader'
import Attributes from './character/Attributes'
import Abilities from './character/Abilities'
import Personality from './character/Personality'
import Skills from './character/Skills'
import Proficiencies from './character/Proficiencies'
import Inventory from './inventory/Inventory'
import Character from './character/Character'

const CharacterTabs = (props) => {
  const panes = [
    { menuItem: 'Character', render: () => (
      <Tab.Pane>
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
      </Tab.Pane>)
    },
    { menuItem: 'Inventory', render: () => <Tab.Pane><Inventory character={props.character} baseUrl={props.baseUrl}/></Tab.Pane> },
    { menuItem: 'Combat', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
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
