import React from 'react';
import { Grid } from 'semantic-ui-react'

import Spinner from '../Spinner'
import Features from './features/Features'
import Spells from './spells/Spells'

const Combat = (props) => {
  if (props.character) {
    return (
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Features   id={props.character.id}
                        baseUrl={props.baseUrl}
                        features={props.character.features}
                        createModalDescription={props.createModalDescription}/>
          </Grid.Column>
          <Grid.Column>
            <Spells   id={props.character.id}
                      baseUrl={props.baseUrl}
                      spells={props.character.spells}
                      createModalDescription={props.createModalDescription}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <h1>Test</h1>
          </Grid.Column>
          <Grid.Column>
            <h1>Test</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
  return <Spinner />
}

export default Combat;
