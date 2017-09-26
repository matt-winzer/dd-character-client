import React, { Component } from 'react'
import { Table, Button, Input } from 'semantic-ui-react'


class ExtraStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      savingData: false,
      inspiration: this.props.inspiration,
      passivePerception: this.props.passivePerception,
      vision: this.props.vision,
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
        inspiration: this.state.inspiration,
        passive_perception: this.state.passivePerception,
        vision: this.state.vision,
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
            <Table.HeaderCell className='table-header-edit'>Value{!editMode ? <Button disabled size='small' circular className='edit-button-small' icon='edit' onClick={this.toggleEditMode}/> : <Button size='small' circular className='edit-button-small' icon='save' color='green' loading={savingData ? true : false} onClick={this.saveEdits.bind(null, this.props.id)}/>}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Inspiration</Table.Cell>
            {!editMode ? <Table.Cell width={8}>{this.state.inspiration}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='inspiration' placeholder={this.state.inspiration} value={this.state.inspiration} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Passive Perception</Table.Cell>
            {!editMode ? <Table.Cell width={8}>{this.state.passivePerception}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='passivePerception' placeholder={this.state.passivePerception} value={this.state.passivePerception} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Vision</Table.Cell>
            {!editMode ? <Table.Cell width={8}>{this.state.vision}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='vision' placeholder={this.state.vision} value={this.state.vision} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

export default ExtraStats
