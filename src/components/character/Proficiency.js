import React from 'react'
import { Table, Modal, Icon, Header } from 'semantic-ui-react'

const Proficiency = (props) => {
  return (
    <Modal trigger={<Table.Row>
                      <Table.Cell>{props.name}</Table.Cell>
                      <Table.Cell>{props.type}</Table.Cell>
                    </Table.Row>} basic size='small' closeIcon>
      <Header as='h1' icon='user plus' content={props.name} />
      <Modal.Content>
        <h3>Hello</h3>
      </Modal.Content>
    </Modal>
  )
}

export default Proficiency
