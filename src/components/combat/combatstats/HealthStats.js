import React, { Component } from 'react'
import { Table, Button, Input } from 'semantic-ui-react'


class CombatStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      savingData: false,
      hpTotal: this.props.hpTotal,
      hpCurrent: this.props.hpCurrent,
      hpBonus: this.props.hpBonus,
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
        hp_current: this.state.hpCurrent,
        hp_total: this.state.hpTotal,
        hp_bonus: this.state.hpBonus,
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
      <Table celled unstackable inverted color='orange'>
        <Table.Header className='modal-table-header' fullWidth>
          <Table.Row>
            <Table.HeaderCell>Health</Table.HeaderCell>
            <Table.HeaderCell className='table-header-edit'>Value{!editMode ? <Button size='small' circular className='edit-button-small' icon='edit' onClick={this.toggleEditMode}/> : <Button size='small' circular className='edit-button-small' icon='save' color='green' loading={savingData ? true : false} onClick={this.saveEdits.bind(null, this.props.id)}/>}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>HP Current</Table.Cell>
            {!editMode ? <Table.Cell width={8}>{this.state.hpCurrent}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='hpCurrent' placeholder={this.state.hpCurrent} value={this.state.hpCurrent} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>HP Total</Table.Cell>
            {!editMode ? <Table.Cell width={8}>{this.state.hpTotal}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='hpTotal' placeholder={this.state.hpTotal} value={this.state.hpTotal} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>HP Bonus</Table.Cell>
            {!editMode ? <Table.Cell width={8}>{this.state.hpBonus}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='hpBonus' placeholder={this.state.hpBonus} value={this.state.hpBonus} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

export default CombatStats
