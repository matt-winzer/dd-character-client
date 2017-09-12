import React from 'react'
import { Table } from 'semantic-ui-react'

const Personality = (props) => (
  <Table celled inverted color='violet'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Personality</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Traits</Table.Cell>
        <Table.Cell>{props.traits}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Ideals</Table.Cell>
        <Table.Cell>{props.ideals}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Bonds</Table.Cell>
        <Table.Cell>{props.bonds}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Flaws</Table.Cell>
        <Table.Cell>{props.flaws}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default Personality
