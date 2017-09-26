import React, { Component } from 'react'
import { Table, Button, Input } from 'semantic-ui-react'


class CombatStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      savingData: false,
      speed: this.props.speed,
      initiative: this.props.initiative,
      armorClass: this.props.armorClass,
      baseUrl: `${this.props.baseUrl}character`
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
        speed: this.state.speed,
        initiative: this.state.initiative,
        armor_class: this.state.armorClass,
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
      <Table celled unstackable color='blue'>
        <Table.Header className='modal-table-header' fullWidth>
          <Table.Row>
            <Table.HeaderCell>Stat</Table.HeaderCell>
            <Table.HeaderCell className='table-header-edit'>Value{!editMode ? <Button size='small' circular className='edit-button-small' icon='edit' onClick={this.toggleEditMode}/> : <Button size='small' circular className='edit-button-small' icon='save' color='green' loading={savingData ? true : false} onClick={this.saveEdits.bind(null, this.props.id)}/>}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Speed</Table.Cell>
            {!editMode ? <Table.Cell width={8}>{this.state.speed}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='speed' placeholder={this.state.speed} value={this.state.speed} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Initiative</Table.Cell>
            {!editMode ? <Table.Cell width={8}>{this.state.initiative}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='initiative' placeholder={this.state.initiative} value={this.state.initiative} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Armor Class</Table.Cell>
            {!editMode ? <Table.Cell width={8}>{this.state.armorClass}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='armorClass' placeholder={this.state.armorClass} value={this.state.armorClass} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

export default CombatStats
