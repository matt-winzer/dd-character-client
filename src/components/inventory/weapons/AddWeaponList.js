import _ from 'lodash'
import React, { Component } from 'react'
import { Table, Modal, Header, Button, Icon, Input, Form, TextArea, Search } from 'semantic-ui-react'

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
            <AddWeapon  key={weapon.name}
                        id={weapon.id}
                        characterId={this.props.id}
                        baseUrl={this.props.baseUrl}
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
          weapons: newWeapons,
          results: newWeapons
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

  resetComponent = () => this.setState({
   ...this.state,
   isLoading: false,
   results: this.state.weapons,
   value: ''
  })

  // handleResultSelect = (e, { result }) => this.setState({ value: result.key })

  handleSearchChange = (e, { value }) => {
   this.setState({ isLoading: true, value })

   setTimeout(() => {
     if (this.state.value.length < 1) return this.resetComponent()

     const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
     const isMatch = result => re.test(result.key)
     const weapons = this.state.weapons

     this.setState({
       isLoading: false,
       results: _.filter(weapons, isMatch),
     })
   }, 500)
  }

  render() {
    const { isLoading, value, results, editMode, savingData, weapons } = this.state

    return (
      <div>
        <Input  placeholder='Search by Name'
                loading={isLoading}
                onChange={this.handleSearchChange}
                icon='search'
                className='search-input input-edit'/>
        <Table className='modal-table' compact={editMode ? true : false} celled selectable unstackable color='red'>
            <Table.Header className='modal-table-header' fullWidth>
              <Table.Row>
                <Table.HeaderCell>Weapon</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Range</Table.HeaderCell>
                <Table.HeaderCell textAlign='center'>Damage</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
          <Table.Body>
            {results}
          </Table.Body>
        </Table>
      </div>

    )
  }
}

export default AddWeaponList
