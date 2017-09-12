import React from 'react'
import { Table } from 'semantic-ui-react'

import Ability from './Ability'

const CharacterAbilities = (props) => {
  const abilities = props.abilities.map(ability => {
          return <Ability key={ability.id}
                          name={ability.full_name}
                          value={ability.value}
                          modifier={ability.modifier}/>
        })

  return (
    <Table celled selectable inverted color='green'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Ability</Table.HeaderCell>
          <Table.HeaderCell>Value</Table.HeaderCell>
          <Table.HeaderCell>Modifier</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {abilities}
      </Table.Body>
    </Table>
  )
}

export default CharacterAbilities
