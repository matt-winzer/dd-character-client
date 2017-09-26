import React from 'react'
import { Table } from 'semantic-ui-react'

import Spell from './Spell'

const Spells = (props) => {
  const spells = props.spells.map(spell => {
    return <Spell key={spell.id}
                  id={spell.id}
                  baseUrl={props.baseUrl}
                  characterId={props.id}
                  name={spell.name}
                  range={spell.range}
                  ritual={spell.ritual}
                  duration={spell.duration}
                  concentration={spell.concentration}
                  castingTime={spell.casting_time}
                  level={spell.level}
                  magicSchool={spell.magic_school.name}
                  url={spell.url}
                  createModalDescription={props.createModalDescription}/>
  })

  return (
    <Table celled selectable unstackable inverted color='green'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Spell</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Level</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>School</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {spells}
      </Table.Body>
    </Table>
  )
}

export default Spells
