import React from 'react';
import { Grid } from 'semantic-ui-react'

import Spinner from '../Spinner'
import Features from './features/Features'
import Spells from './spells/Spells'
import Weapons from '../inventory/weapons/Weapons'
import CombatStats from './combatstats/CombatStats'
import HealthStats from './combatstats/HealthStats'
import ExtraStats from './combatstats/ExtraStats'

const Combat = (props) => {
  if (props.character) {
    return (
      <Grid stackable>
        <Grid.Row columns={3}>
          <Grid.Column>
            <CombatStats  id={props.character.id}
                          baseUrl={props.baseUrl}
                          speed={props.character.speed}
                          initiative={props.character.initiative}
                          armorClass={props.character.armor_class}/>
          </Grid.Column>
          <Grid.Column>
            <HealthStats  id={props.character.id}
                          baseUrl={props.baseUrl}
                          hpTotal={props.character.hp_total}
                          hpCurrent={props.character.hp_current}
                          hpBonus={props.character.hp_bonus}/>
          </Grid.Column>
          <Grid.Column>
            <ExtraStats id={props.character.id}
                        inspiration={props.inspiration}
                        hpTotal={props.character.hp_total}
                        hpCurrent={props.character.hp_current}
                        hpBonus={props.character.hp_bonus}/>
          </Grid.Column>
        </Grid.Row>
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
            <Weapons  baseUrl={props.baseUrl}
                      weapons={props.character.weapons}/>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
  return <Spinner />
}

export default Combat;
