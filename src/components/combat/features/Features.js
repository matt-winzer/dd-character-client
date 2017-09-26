import React from 'react'
import { Table } from 'semantic-ui-react'

import Feature from './Feature'

const Features = (props) => {
  const abilities = props.abilities.map(ability => {
    return <Feature key={ability.id}
                    id={ability.id}
                    baseUrl={props.baseUrl}
                    characterId={props.id}
                    name={ability.full_name}
                    value={ability.value}
                    modifier={ability.modifier}
                    url={ability.url}
                    createModalDescription={props.createModalDescription}/>
  })

  return (
    <Table celled selectable unstackable inverted color='green'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Ability</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Value</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Modifier</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {abilities}
      </Table.Body>
    </Table>
  )
}

export default Features
