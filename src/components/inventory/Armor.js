import React from 'react'
import { Table, Modal, Icon, Header } from 'semantic-ui-react'

const Armor = (props) => {
  return (
    <Modal trigger={<Table.Row>
                      <Table.Cell>{props.name}</Table.Cell>
                      <Table.Cell>{props.category}</Table.Cell>
                      <Table.Cell textAlign='center'>{props.costValue} {props.costUnit}</Table.Cell>
                      <Table.Cell textAlign='center'>{props.weight}</Table.Cell>
                    </Table.Row>} basic size='small' closeIcon>
      <Header as='h1' icon='thumbs outline up' content={props.name} />
      <Modal.Content>
        <h3>{props.description}</h3>
      </Modal.Content>
    </Modal>
  )
}

export default Armor
