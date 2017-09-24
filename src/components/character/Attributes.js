import React, { Component } from 'react'
import { Table, Modal, Header, Button, Icon, Input, Form, TextArea, Label } from 'semantic-ui-react'


class Attributes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      background: props.background,
      alignment: props.alignment,
      age: props.age,
      sex: props.sex,
      height: props.height,
      weight: props.weight,
      hairColor: props.hairColor,
      eyeColor: props.eyeColor,
      skinColor: props.skinColor,
      baseUrl: 'http://localhost:3000/attribute'
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

    fetch(url, options)
      .then(response => response.json())
      .then(response => {
        this.setState({
          ...this.state,
          editMode: editMode
        })
      })
      .catch(err => {
      console.log(err)
    })
  }

  render() {
    const editMode = this.state.editMode

    return (
      <Table celled unstackable inverted color='violet'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Attribute</Table.HeaderCell>
            <Table.HeaderCell className='table-header-edit'>Value{!editMode ? <Button className='edit-button-small' icon='edit' color='grey' onClick={this.toggleEditMode}/> : <Button className='edit-button-small' icon='save' color='green' onClick={this.saveEdits.bind(null, this.props.id)}/>}</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Background</Table.Cell>
            <Table.Cell>{this.state.background}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Alignment</Table.Cell>
            <Table.Cell>{this.state.alignment}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Age</Table.Cell>
            <Table.Cell>{this.state.age}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Sex</Table.Cell>
            <Table.Cell>{this.state.sex}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Height</Table.Cell>
            <Table.Cell>{this.state.height}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Weight</Table.Cell>
            <Table.Cell>{this.state.weight}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Hair Color</Table.Cell>
            <Table.Cell>{this.state.hairColor}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Eye Color</Table.Cell>
            <Table.Cell>{this.state.eyeColor}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Skin Color</Table.Cell>
            <Table.Cell>{this.state.skinColor}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )

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
          {!editMode ? <Button className='editButton' icon='edit' color='grey' content='Edit' onClick={this.toggleEditMode}/> : <Button className='editButton' icon='save' color='green' content='Save' onClick={this.saveEdits.bind(null, this.props.id)}/>}
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
                {!editMode ? <Table.Cell>{this.state.costValue} {this.state.costUnit}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='costValue' placeholder={this.state.costValue} value={this.state.costValue} onChange={this.handleChange}/><Input fluid className='input-edit' name='costUnit' placeholder={this.state.costUnit} value={this.state.costUnit} onChange={this.handleChange}/></Table.Cell>}
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

export default Attributes
