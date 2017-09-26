import React, { Component } from 'react'
import { Table, Modal, Header, Button, Icon, Input, Label } from 'semantic-ui-react'

class Skill extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      savingData: false,
      characterId: props.characterId,
      description: props.description,
      name: props.name,
      value: props.value,
      modifier: props.modifier,
      abilityName: props.abilityName,
      baseUrl: `${props.baseUrl}character`
    }
  }

  handleChange = (e) => {
    const key = e.target.name
    const value = e.target.value

    this.setState({
      ...this.state,
      [key]: value
    })
  }

  toggleEditMode = () => {
    let editMode = !this.state.editMode

    this.setState({
      ...this.state,
      editMode: editMode
    })
  }

  saveEdits = (id, characterId) => {
    const editMode = !this.state.editMode
    const url = `${this.state.baseUrl}/${characterId}/skill/${id}`
    const options = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        modifier: this.state.modifier
      })
    }

    this.setState({
      ...this.state,
      savingData: true
    })

    fetch(url, options)
      .then(response => response.json())
      .then(response => {
        this.setState({
          ...this.state,
          editMode: editMode,
          savingData: false
        })
      })
      .catch(err => {
      console.log(err)
    })
  }

  render() {
    const editMode = this.state.editMode
    const savingData = this.state.savingData

    return (
      <Modal  trigger={<Table.Row>
                        <Table.Cell>{this.state.name}</Table.Cell>
                        <Table.Cell textAlign='center'>{this.state.modifier}</Table.Cell>
                      </Table.Row>}
              size='small'
              closeIcon>
        <Header as='h1' floated='left'>
          <Icon name='share alternate'/>
          {this.state.name}
        </Header>
        <Header as='h1' floated='right'>
          {!editMode ? <Button circular className='editButton' icon='edit' color='grey' content='Edit' onClick={this.toggleEditMode}/> : <Button circular className='editButton' icon='save' color='green' content='Save' loading={savingData ? true : false} onClick={this.saveEdits.bind(null, this.props.id, this.state.characterId)}/>}
        </Header>
        <Modal.Content className='scrolling-modal-content' scrolling>
          <Table className='modal-table' compact={editMode ? true : false} celled striped unstackable color='blue'>
              <Table.Header className='modal-table-header' fullWidth>
                <Table.Row>
                  <Table.HeaderCell colSpan='2'>
                    <p>{this.state.description || 'No description available.'}</p>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={8}><strong>Modifer</strong></Table.Cell>
                {!editMode ? <Table.Cell>{this.state.modifier}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='modifier' placeholder={this.state.modifier} value={this.state.modifier} onChange={this.handleChange}/></Table.Cell>}
              </Table.Row>
              <Table.Row>
                <Table.Cell width={8}><strong>Ability</strong></Table.Cell>
                <Table.Cell><Label color='green'>{this.state.abilityName}</Label></Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Skill
