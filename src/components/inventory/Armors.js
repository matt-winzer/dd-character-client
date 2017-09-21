import React from 'react'
import { Table } from 'semantic-ui-react'

import Armor from './Armor'

const Armors = (props) => {
  const armors = props.armors.map(armor => {
          return <Armor key={armor.id}
                        id={armor.id}
                        name={armor.name}
                        description={armor.description}
                        category={armor.category}
                        weight={armor.weight}
                        costValue={armor.cost_value}
                        costUnit={armor.cost_unit}
                        acBase={armor.ac_base}
                        acMax={armor.ac_max_bonus}
                        dexBonus={armor.ac_dex_bonus}
                        stealth={armor.stealth_disadvantage}
                        minStrength={armor.strength_min}/>
        })

  return (
    <Table celled selectable unstackable inverted color='brown'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Armor</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>AC Base</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Cost</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {armors}
      </Table.Body>
    </Table>
  )
}

export default Armors
