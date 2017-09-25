import React from 'react'
import { Table } from 'semantic-ui-react'

import Weapon from './Weapon'

const Weapons = (props) => {
  const weapons = props.weapons.map(weapon => {
    return <Weapon  key={weapon.id}
                    id={weapon.id}
                    baseUrl={props.baseUrl}
                    name={weapon.name}
                    category={weapon.category}
                    description={weapon.description}
                    range={weapon.range_normal}
                    damageDiceCount={weapon.damage_dice_count}
                    damageDiceValue={weapon.damage_dice_value}
                    damageType={weapon.damage_type.name}
                    weight={weapon.weight}
                    costUnit={weapon.cost_unit}
                    costValue={weapon.cost_value}/>
  })

  return (
    <Table celled selectable unstackable inverted color='red'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Weapon</Table.HeaderCell>
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
