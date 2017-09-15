import React from 'react'
import { Table, Modal, Icon, Header } from 'semantic-ui-react'

const Ability = (props) => {
  return (
    <Modal trigger={<Table.Row>
                      <Table.Cell>{props.name}</Table.Cell>
                      <Table.Cell textAlign='center'>{props.value}</Table.Cell>
                      <Table.Cell textAlign='center'>{props.modifier}</Table.Cell>
                    </Table.Row>} basic size='small' closeIcon>
      <Header as='h1' icon='universal access' content={props.name} />
      <Modal.Content>
        <h3>{props.description}</h3>
      </Modal.Content>
    </Modal>
  )
}

export default Ability
