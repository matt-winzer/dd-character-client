import React, { Component } from 'react'
import { Table, Button, Input } from 'semantic-ui-react'

class Attributes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      savingData: false,
      background: props.background,
      alignment: props.alignment,
      age: props.age,
      sex: props.sex,
      height: props.height,
      weight: props.weight,
      hairColor: props.hairColor,
      eyeColor: props.eyeColor,
      skinColor: props.skinColor,
      baseUrl: 'https://drageons.herokuapp.com/character'
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
        background: this.state.background,
        alignment: this.state.alignment,
        age: this.state.age,
        sex: this.state.sex,
        height: this.state.height,
        weight: this.state.weight,
        hair_color: this.state.hairColor,
        eye_color: this.state.eyeColor,
        skin_color: this.state.skinColor,
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
      <Table celled unstackable inverted color='violet'>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Attribute</Table.HeaderCell>
            <Table.HeaderCell className='table-header-edit'>Value{!editMode ? <Button size='small' circular className='edit-button-small' icon='edit' color='white' onClick={this.toggleEditMode}/> : <Button size='small' circular className='edit-button-small' icon='save' color='green' loading={savingData ? true : false} onClick={this.saveEdits.bind(null, this.props.id)}/>}</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Background</Table.Cell>
            {!editMode ? <Table.Cell width={8} >{this.state.background}</Table.Cell> : <Table.Cell width={8} textAlign='center'><Input fluid className='input-edit' name='background' placeholder={this.state.background} value={this.state.background} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Alignment</Table.Cell>
            {!editMode ? <Table.Cell width={8} >{this.state.alignment}</Table.Cell> : <Table.Cell width={8} textAlign='center'><Input fluid className='input-edit' name='alignment' placeholder={this.state.alignment} value={this.state.alignment} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Age</Table.Cell>
            {!editMode ? <Table.Cell width={8} >{this.state.age}</Table.Cell> : <Table.Cell width={8} textAlign='center'><Input fluid className='input-edit' name='age' placeholder={this.state.age} value={this.state.age} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Sex</Table.Cell>
            {!editMode ? <Table.Cell width={8} >{this.state.sex}</Table.Cell> : <Table.Cell width={8} textAlign='center'><Input fluid className='input-edit' name='sex' placeholder={this.state.sex} value={this.state.sex} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Height</Table.Cell>
            {!editMode ? <Table.Cell width={8} >{this.state.height}</Table.Cell> : <Table.Cell width={8} textAlign='center'><Input fluid className='input-edit' name='height' placeholder={this.state.height} value={this.state.height} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Weight</Table.Cell>
            {!editMode ? <Table.Cell width={8} >{this.state.weight}</Table.Cell> : <Table.Cell width={8} textAlign='center'><Input fluid className='input-edit' name='weight' placeholder={this.state.weight} value={this.state.weight} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Hair Color</Table.Cell>
            {!editMode ? <Table.Cell width={8} >{this.state.hairColor}</Table.Cell> : <Table.Cell width={8} textAlign='center'><Input fluid className='input-edit' name='hairColor' placeholder={this.state.hairColor} value={this.state.hairColor} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Eye Color</Table.Cell>
            {!editMode ? <Table.Cell width={8} >{this.state.eyeColor}</Table.Cell> : <Table.Cell width={8} textAlign='center'><Input fluid className='input-edit' name='eyeColor' placeholder={this.state.eyeColor} value={this.state.eyeColor} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Skin Color</Table.Cell>
            {!editMode ? <Table.Cell width={8} >{this.state.skinColor}</Table.Cell> : <Table.Cell width={8} textAlign='center'><Input fluid className='input-edit' name='skinColor' placeholder={this.state.skinColor} value={this.state.skinColor} onChange={this.handleChange}/></Table.Cell>}
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

export default Attributes
