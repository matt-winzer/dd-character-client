import React from 'react';
import { Grid } from 'semantic-ui-react'

import Spinner from '../Spinner'
import Weapons from './Weapons'
import Items from './Items'
import Armors from './Armors'
import Currency from './Currency'

const Inventory = (props) => {
  if (props.character) {
    return (
      <Grid stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Weapons  baseUrl={props.baseUrl}
                      weapons={props.character.weapons}/>
          </Grid.Column>
          <Grid.Column>
            <Armors baseUrl={props.baseUrl}
                    armors={props.character.armors}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Items  baseUrl={props.baseUrl}
                    items={props.character.items}/>
          </Grid.Column>
          <Grid.Column>
            <Currency id={props.character.id}
                      baseUrl={props.baseUrl}
                      copper={props.character.copper}
                      silver={props.character.silver}
                      gold={props.character.gold}
                      electrum={props.character.electrum}
                      platinum={props.character.platinum}
                      />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
  return <Spinner />
}

export default Inventory;
