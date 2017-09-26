import React, { Component } from 'react'
import { Table, Modal, Header, Button, Icon, Input, Form, TextArea } from 'semantic-ui-react'

class AddWeaponList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      savingData: false,
      characterId: props.id,
      baseUrl: `${props.baseUrl}weapon`
    }
  }

  componentWillMount() {
    fetch(this.state.baseUrl)
      .then(response => response.json())
      .then(weapons => {
        const newWeapons = weapons.map(weapon => {
          return (
            <Table.Row>
              <Table.Cell width={8}>{weapon.name}</Table.Cell>
              <Table.Cell width={8}>{weapon.range_normal}</Table.Cell>
              <Table.Cell width={8}>{weapon.damage_dice_count} D{weapon.damage_dice_value}</Table.Cell>
            </Table.Row>
          )
        })
        this.setState({
          ...this.state,
          weapons: newWeapons
        })
      })
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
        cost_value: this.state.costValue,
        cost_unit: this.state.costUnit,
        range_normal: this.state.range,
        damage_dice_count: this.state.damageDiceCount,
        damage_dice_value: this.state.damageDiceValue,
        weight: this.state.weight,
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
    const weapons = this.state.weapons

    return (
      <Table className='modal-table' compact={editMode ? true : false} celled striped unstackable color='red'>
          <Table.Header className='modal-table-header' fullWidth>
            <Table.Row>
              <Table.HeaderCell>Weapon</Table.HeaderCell>
              <Table.HeaderCell>Range</Table.HeaderCell>
              <Table.HeaderCell>Damage</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        <Table.Body>
          {weapons}
        </Table.Body>
      </Table>

    )
  }
}

export default AddWeaponList
