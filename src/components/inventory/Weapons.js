import React from 'react'
import { Table } from 'semantic-ui-react'

import Weapon from './Weapon'

const Weapons = (props) => {
  const weapons = props.weapons.map(weapon => {
          return <Weapon  key={weapon.id}
                          name={weapon.name}
                          category={weapon.category}
                          range={weapon.range_normal}
                          damageDiceCount={weapon.damage_dice_count}
                          damageDiceValue={weapon.damage_dice_value}/>
        })

  return (
    <Table celled selectable inverted color='red'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Weapon</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Range</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Damage</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {weapons}
      </Table.Body>
    </Table>
  )
}

export default Weapons
