import React from 'react'
import { Table } from 'semantic-ui-react'

const Ability = (props) => {
  return (
    <Table.Row>
      <Table.Cell>{props.name}</Table.Cell>
      <Table.Cell>{props.value}</Table.Cell>
      <Table.Cell>{props.modifier}</Table.Cell>
    </Table.Row>
  )
}

export default Ability
