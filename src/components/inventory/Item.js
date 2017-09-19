import React from 'react'
import { Table, Modal, Header } from 'semantic-ui-react'

const Item = (props) => {
  return (
    <Modal trigger={<Table.Row>
                      <Table.Cell>{props.name}</Table.Cell>
                      <Table.Cell>{props.category}</Table.Cell>
                      <Table.Cell textAlign='center'>{props.costValue} {props.costUnit}</Table.Cell>
                      <Table.Cell textAlign='center'>{props.weight}</Table.Cell>
                    </Table.Row>} basic size='small' closeIcon>
      <Header as='h1' icon='first aid' content={props.name} />
      <Modal.Content>
        <h3>{props.description}</h3>
      </Modal.Content>
    </Modal>
  )
}

export default Item
