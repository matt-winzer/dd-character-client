import React from 'react'
import { Table, Modal, Header } from 'semantic-ui-react'

const Armor = (props) => {
  let stealth = 'False'
  let dexBonus = 'False'
  if (props.stealth) {
    stealth = 'True'
  }
  if (props.dexBonus) {
    dexBonus = 'True'
  }
  return (
    <Modal trigger={<Table.Row>
                      <Table.Cell>{props.name}</Table.Cell>
                      <Table.Cell>{props.category}</Table.Cell>
                      <Table.Cell textAlign='center'>{props.acBase}</Table.Cell>
                      <Table.Cell textAlign='center'>{dexBonus}</Table.Cell>
                      <Table.Cell textAlign='center'>{stealth}</Table.Cell>
                      <Table.Cell textAlign='center'>{props.costValue} {props.costUnit}</Table.Cell>
                      <Table.Cell textAlign='center'>{props.weight}</Table.Cell>
                    </Table.Row>} basic size='small' closeIcon>
      <Header as='h1' icon='shield' content={props.name} />
      <Modal.Content>
        <h3>{props.description}</h3>
      </Modal.Content>
    </Modal>
  )
}

export default Armor
