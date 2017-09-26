import React, { Component } from 'react'
import { Table, Modal, Header, Button, Icon, Input, Form, TextArea } from 'semantic-ui-react'

import AddWeapon from './AddWeapon'

class AddWeaponList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      savingData: false,
      characterId: props.id,
      weaponUrl: `${props.weaponUrl}`
    }
  }

  componentWillMount() {
    fetch(this.state.weaponUrl)
      .then(response => response.json())
      .then(weapons => {
        const newWeapons = weapons.map(weapon => {
          return (
            <AddWeapon  key={weapon.id}
                        id={weapon.id}
                        weaponUrl={this.props.weaponUrl}
                        name={weapon.name}
                        category={weapon.category}
                        description={weapon.description}
                        range={weapon.range_normal}
                        damageDiceCount={weapon.damage_dice_count}
                        damageDiceValue={weapon.damage_dice_value}
                        damageType={weapon.damage_type.name}
                        weight={weapon.weight}
                        costUnit={weapon.cost_unit}
                        costValue={weapon.cost_value}/>
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
      <Table className='modal-table' compact={editMode ? true : false} celled selectable unstackable color='red'>
          <Table.Header className='modal-table-header' fullWidth>
            <Table.Row>
              <Table.HeaderCell>Weapon</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Range</Table.HeaderCell>
              <Table.HeaderCell textAlign='center'>Damage</Table.HeaderCell>
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
