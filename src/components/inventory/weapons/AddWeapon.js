import React, { Component } from 'react'
import { Table, Modal, Header, Button, Icon, Input, Form, TextArea, Label } from 'semantic-ui-react'

class AddWeapon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      savingData: false,
      itemAdded: false,
      name: props.name,
      description: props.description,
      category: props.category,
      costValue: props.costValue,
      costUnit: props.costUnit,
      range: props.range,
      damageType: props.damageType,
      damageDiceCount: props.damageDiceCount,
      damageDiceValue: props.damageDiceValue,
      weight: props.weight,
      weaponUrl: `${props.weaponUrl}`
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

  addWeapon = (id, characterId) => {
    console.log('weapon ID: ', id);
    console.log('characrer ID: ', characterId);

    const url = `${this.props.baseUrl}character/${characterId}/weapon`
    const options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        character_id: characterId,
        weapon_id: id,
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
          savingData: false,
          itemAdded: true
        })
      })
      .catch(err => {
      console.log(err)
    })
  }

  resetItemAdded = (e) => {
    console.log(e);
    this.setState({
      ...this.state,
      itemAdded: false
    })
  }

  render() {
    const editMode = this.state.editMode
    const savingData = this.state.savingData
    const itemAdded = this.state.itemAdded

    return (
      <Modal  trigger={<Table.Row>
                        <Table.Cell>{this.state.name}</Table.Cell>
                        <Table.Cell textAlign='center'>{this.state.range}</Table.Cell>
                        <Table.Cell textAlign='center'>{this.state.damageDiceCount} D{this.state.damageDiceValue}</Table.Cell>
                      </Table.Row>}
              size='small'
              onClose={this.resetItemAdded}
              closeIcon>
        <Header as='h1' floated='left'>
          <Icon name='crosshairs'/>
          {this.state.name}
        </Header>
        <Header as='h1' floated='right'>
          {!itemAdded ? <Button circular className='editButton' icon='crosshairs' color='grey' content='Add' loading={savingData ? true: false} onClick={this.props.addToInventory.bind(null, this.props.id, 'weapons')}/> : <Button circular className='editButton' icon='thumbs up' color='red' content='Added' loading={savingData ? true: false}/>}
        </Header>
        <Modal.Content className='scrolling-modal-content' scrolling>
          <Table className='modal-table' compact={editMode ? true : false} celled striped unstackable color='red'>
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
                {!editMode ? <Table.Cell width={8}>{this.state.name}</Table.Cell> : <Table.Cell width={8} textAlign='center'><Input fluid className='input-edit' name='name' placeholder={this.state.name} value={this.state.name} onChange={this.handleChange}/></Table.Cell>}
              </Table.Row>
              <Table.Row>
                <Table.Cell><strong>Category</strong></Table.Cell>
                {!editMode ? <Table.Cell>{this.state.category}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='category' placeholder={this.state.category} value={this.state.category} onChange={this.handleChange}/></Table.Cell>}
              </Table.Row>
              <Table.Row>
                <Table.Cell><strong>Damage Type</strong></Table.Cell>
                {!editMode ? <Table.Cell>{this.state.damageType}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid disabled className='input-edit' name='damageType' placeholder={this.state.damageType} value={this.state.damageType} onChange={this.handleChange}/></Table.Cell>}

              </Table.Row>
              <Table.Row>
                <Table.Cell><strong>Damage</strong></Table.Cell>
                {!editMode ? <Table.Cell>{this.state.damageDiceCount} D{this.state.damageDiceValue}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid label='Dice #' className='input-edit' name='damageDiceCount' placeholder={this.state.damageDiceCount} value={this.state.damageDiceCount} onChange={this.handleChange}/><Input fluid label='D' className='input-edit' name='damageDiceValue' placeholder={this.state.damageDiceValue} value={this.state.damageDiceValue} onChange={this.handleChange}/></Table.Cell>}
              </Table.Row>
              <Table.Row>
                <Table.Cell><strong>Range</strong></Table.Cell>
                {!editMode ? <Table.Cell>{this.state.range}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='range' placeholder={this.state.range} value={this.state.range} onChange={this.handleChange}/></Table.Cell>}
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

export default AddWeapon
