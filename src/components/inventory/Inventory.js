import React from 'react';
import { Container, Grid } from 'semantic-ui-react'

import Spinner from '../Spinner'
import CharacterHeader from '../character/CharacterHeader'
import Weapons from './Weapons'
import Items from './Items'
import Armors from './Armors'

const Inventory = (props) => {
  if (props.character) {
    return (
      <Container className='main-content'>
        <CharacterHeader  name={props.character.name}
                          level={props.character.level}
                          _class={props.character.class.name}
                          race={props.character.race}/>
        <Grid stackable>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Weapons weapons={props.character.weapons}/>
            </Grid.Column>
            <Grid.Column>
              <Items items={props.character.items}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Armors armors={props.character.armors}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
  return <Spinner />
}

export default Inventory;
