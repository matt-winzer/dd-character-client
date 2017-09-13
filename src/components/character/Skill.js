import React from 'react'
import { Table, Modal, Icon, Button, Header } from 'semantic-ui-react'

const Skill = (props) => {
  return (

    <Modal trigger={<Table.Row>
                      <Table.Cell>{props.name}</Table.Cell>
                      <Table.Cell>{props.value}</Table.Cell>
                      <Table.Cell>{props.modifier}</Table.Cell>
                    </Table.Row>}
                    basic size='small' closeIcon closeOnDocumentClick='true'>
      <Header icon='archive' content={props.name} />
      <Modal.Content>
        <h3>{props.description}</h3>
      </Modal.Content>
    </Modal>
  )
}

export default Skill

      // <Table.Cell>{props.description}</Table.Cell>
