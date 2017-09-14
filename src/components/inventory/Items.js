import React from 'react'
import { Table } from 'semantic-ui-react'

import Item from './Item'

const Items = (props) => {
  const items = props.items.map(item => {
          return <Item  key={item.id}
                          name={item.name}
                          category={item.category}
                          weight={item.weight}
                          costValue={item.cost_value}
                          costUnit={item.cost_unit}/>
        })

  return (
    <Table celled selectable unstackable inverted color='orange'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Item</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Cost</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Weight</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {items}
      </Table.Body>
    </Table>
  )
}

export default Items
