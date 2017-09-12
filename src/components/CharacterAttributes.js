import React from 'react'
import { Table } from 'semantic-ui-react'

const CharacterDemographic = (props) => (
  <Table celled inverted color='blue'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Attribute</Table.HeaderCell>
        <Table.HeaderCell>Value</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Background</Table.Cell>
        <Table.Cell>{props.background}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Alignment</Table.Cell>
        <Table.Cell>{props.alignment}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Age</Table.Cell>
        <Table.Cell>{props.age}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Sex</Table.Cell>
        <Table.Cell>{props.sex}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Height</Table.Cell>
        <Table.Cell>{props.height}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Weight</Table.Cell>
        <Table.Cell>{props.weight}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Hair Color</Table.Cell>
        <Table.Cell>{props.hairColor}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Eye Color</Table.Cell>
        <Table.Cell>{props.eyeColor}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Skin Color</Table.Cell>
        <Table.Cell>{props.skinColor}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default CharacterDemographic
