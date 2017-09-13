import React from 'react'
import { Table } from 'semantic-ui-react'

import Proficiency from './Proficiency'

const Proficiencies = (props) => {
  const proficiencies = props.proficiencies.map(proficiency => {
    return <Proficiency key={proficiency.id}
                        name={proficiency.name}
                        type={proficiency.type}/>
  })

  return (
    <Table celled selectable inverted color='green'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Proficiency</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {proficiencies}
      </Table.Body>
    </Table>
  )
}

export default Proficiencies
