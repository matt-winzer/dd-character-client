import React, { Component } from 'react'
import { Table, Button, Input } from 'semantic-ui-react'


class BattleStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      savingData: false,
      copper: this.props.copper,
      silver: this.props.silver,
      gold: this.props.gold,
      electrum: this.props.electrum,
      platinum: this.props.platinum,
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
        copper: this.state.copper,
        silver: this.state.silver,
        gold: this.state.gold,
        electrum: this.state.electrum,
        platinum: this.state.platinum
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
      <Table celled unstackable inverted color='yellow'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>BattleStats</Table.HeaderCell>
            <Table.HeaderCell className='table-header-edit'>Amount{!editMode ? <Button size='small' circular className='edit-button-small' icon='edit' onClick={this.toggleEditMode}/> : <Button size='small' circular className='edit-button-small' icon='save' color='green' loading={savingData ? true : false} onClick={this.saveEdits.bind(null, this.props.id)}/>}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Copper</Table.Cell>
            {!editMode ? <Table.Cell width={8} >{this.state.copper}</Table.Cell> : <Table.Cell width={8} textAlign='center'><Input fluid className='input-edit' name='copper' placeholder={this.state.copper} value={this.state.copper} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Silver</Table.Cell>
            {!editMode ? <Table.Cell width={8} >{this.state.silver}</Table.Cell> : <Table.Cell width={8} textAlign='center'><Input fluid className='input-edit' name='silver' placeholder={this.state.silver} value={this.state.silver} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Gold</Table.Cell>
            {!editMode ? <Table.Cell width={8} >{this.state.gold}</Table.Cell> : <Table.Cell width={8} textAlign='center'><Input fluid className='input-edit' name='gold' placeholder={this.state.gold} value={this.state.gold} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Electrum</Table.Cell>
            {!editMode ? <Table.Cell width={8} >{this.state.electrum}</Table.Cell> : <Table.Cell width={8} textAlign='center'><Input fluid className='input-edit' name='electrum' placeholder={this.state.electrum} value={this.state.electrum} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Platinum</Table.Cell>
            {!editMode ? <Table.Cell width={8} >{this.state.platinum}</Table.Cell> : <Table.Cell width={8} textAlign='center'><Input fluid className='input-edit' name='platinum' placeholder={this.state.platinum} value={this.state.platinum} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

export default BattleStats
