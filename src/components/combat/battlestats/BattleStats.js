import React, { Component } from 'react'
import { Table, Button, Input } from 'semantic-ui-react'


class BattleStats extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      savingData: false,
      hpTotal: this.props.hpTotal,
      hpCurrent: this.props.hpCurrent,
      hpBonus: this.props.hpBonus,
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
      <Table celled unstackable inverted color='grey'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Speed</Table.HeaderCell>
            <Table.HeaderCell>Initiative</Table.HeaderCell>
            <Table.HeaderCell>AC</Table.HeaderCell>
            <Table.HeaderCell>HP Current</Table.HeaderCell>
            <Table.HeaderCell>HP Total</Table.HeaderCell>
            <Table.HeaderCell className='table-header-edit'>HP+{!editMode ? <Button size='small' circular className='edit-button-small' icon='edit' onClick={this.toggleEditMode}/> : <Button size='small' circular className='edit-button-small' icon='save' color='green' loading={savingData ? true : false} onClick={this.saveEdits.bind(null, this.props.id)}/>}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            {!editMode ? <Table.Cell width={3}>{this.state.speed}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='speed' placeholder={this.state.speed} value={this.state.speed} onChange={this.handleChange}/></Table.Cell>}
            {!editMode ? <Table.Cell width={3}>{this.state.initiative}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='initiative' placeholder={this.state.initiative} value={this.state.initiative} onChange={this.handleChange}/></Table.Cell>}
            {!editMode ? <Table.Cell width={3}>{this.state.armorClass}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='armorClass' placeholder={this.state.armorClass} value={this.state.armorClass} onChange={this.handleChange}/></Table.Cell>}
            {!editMode ? <Table.Cell width={2}>{this.state.hpCurrent}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='hpCurrent' placeholder={this.state.hpCurrent} value={this.state.hpCurrent} onChange={this.handleChange}/></Table.Cell>}
            {!editMode ? <Table.Cell width={2}>{this.state.hpTotal}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='hpTotal' placeholder={this.state.hpTotal} value={this.state.hpTotal} onChange={this.handleChange}/></Table.Cell>}
            {!editMode ? <Table.Cell>{this.state.hpBonus}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='hpBonus' placeholder={this.state.hpBonus} value={this.state.hpBonus} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

export default BattleStats
