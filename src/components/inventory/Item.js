import React, { Component } from 'react'
import { Table, Modal, Header, Button, Icon, Input, Form, TextArea } from 'semantic-ui-react'

class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      savingData: false,
      name: props.name,
      description: props.description,
      category: props.category,
      costValue: props.costValue,
      costUnit: props.costUnit,
      weight: props.weight,
      baseUrl: `${props.baseUrl}item`
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

  saveEdits = (id) => {
    const editMode = !this.state.editMode
    const url = `${this.state.baseUrl}/${id}`
    const options = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        category: this.state.category,
        description: this.state.description,
        weight: this.state.weight,
        cost_value: this.state.costValue,
        cost_unit: this.state.costUnit,
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
      <Modal trigger={<Table.Row>
                        <Table.Cell>{this.state.name}</Table.Cell>
                        <Table.Cell textAlign='center'>{this.state.category}</Table.Cell>
                        <Table.Cell textAlign='center'>{this.state.weight}</Table.Cell>
                        <Table.Cell textAlign='center'>{this.state.costValue} {this.state.costUnit}</Table.Cell>
                      </Table.Row>} size='small' closeIcon>
        <Header as='h1' floated='left'>
          <Icon name='first aid'/>
          {this.state.name}
        </Header>
        <Header as='h1' floated='right'>
          {!editMode ? <Button circular className='editButton' icon='edit' color='grey' content='Edit' onClick={this.toggleEditMode}/> : <Button circular className='editButton' icon='save' color='green' content='Save' loading={savingData ? true : false} onClick={this.saveEdits.bind(null, this.props.id)}/>}
        </Header>
        <Modal.Content>
          <Table className='modal-table' compact={editMode ? true : false} celled striped unstackable color='orange'>
              <Table.Header className='modal-table-header' fullWidth>
                <Table.Row>
                  <Table.HeaderCell colSpan='2'>
                    {!editMode ? <p>{this.state.description || 'No description available.'}</p> : <Form><TextArea className='input-edit' name='description' value={this.state.description} onChange={this.handleChange}/></Form>}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell><strong>Name</strong></Table.Cell>
                {!editMode ? <Table.Cell width={8} >{this.state.name}</Table.Cell> : <Table.Cell width={8} textAlign='center'><Input fluid className='input-edit' name='name' placeholder={this.state.name} value={this.state.name} onChange={this.handleChange}/></Table.Cell>}
              </Table.Row>
              <Table.Row>
                <Table.Cell><strong>Category</strong></Table.Cell>
                {!editMode ? <Table.Cell>{this.state.category}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='category' placeholder={this.state.category} value={this.state.category} onChange={this.handleChange}/></Table.Cell>}
              </Table.Row>
              <Table.Row>
                <Table.Cell><strong>Cost</strong></Table.Cell>
                {!editMode ? <Table.Cell>{this.state.costValue} {this.state.costUnit}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid label='Amount' className='input-edit' name='costValue' placeholder={this.state.costValue} value={this.state.costValue} onChange={this.handleChange}/><Input fluid label='Unit' className='input-edit' name='costUnit' placeholder={this.state.costUnit} value={this.state.costUnit} onChange={this.handleChange}/></Table.Cell>}
              </Table.Row>
              <Table.Row>
                <Table.Cell><strong>Weight</strong></Table.Cell>
                {!editMode ? <Table.Cell>{this.state.weight}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='weight' placeholder={this.state.weight} value={this.state.weight} onChange={this.handleChange}/></Table.Cell>}
              </Table.Row>
            </Table.Body>
          </Table>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Item
