import React, { Component } from 'react'
import { Table, Button, Form, TextArea } from 'semantic-ui-react'


class Personality extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      savingData: false,
      traits: this.props.traits,
      ideals: this.props.ideals,
      bonds: this.props.bonds,
      flaws: this.props.flaws,
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
        personality_traits: this.state.traits,
        ideals: this.state.ideals,
        bonds: this.state.bonds,
        flaws: this.state.flaws,
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
          editMode: editMode
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
            <Table.HeaderCell>Personality</Table.HeaderCell>
            <Table.HeaderCell className='table-header-edit'>Description{!editMode ? <Button size='small' circular className='edit-button-small' icon='edit' color='white' onClick={this.toggleEditMode}/> : <Button size='small' circular className='edit-button-small' icon='save' color='green' loading={savingData ? true : false} onClick={this.saveEdits.bind(null, this.props.id)}/>}</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Traits</Table.Cell>
            {!editMode ? <Table.Cell width={12} >{this.state.traits}</Table.Cell> : <Table.Cell width={12} textAlign='center'><Form><TextArea className='input-edit' name='traits' placeholder={this.state.traits} value={this.state.traits} onChange={this.handleChange}/></Form></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Ideals</Table.Cell>
            {!editMode ? <Table.Cell width={12} >{this.state.ideals}</Table.Cell> : <Table.Cell width={12} textAlign='center'><Form><TextArea className='input-edit' name='ideals' placeholder={this.state.ideals} value={this.state.ideals} onChange={this.handleChange}/></Form></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Bonds</Table.Cell>
            {!editMode ? <Table.Cell width={12} >{this.state.bonds}</Table.Cell> : <Table.Cell width={12} textAlign='center'><Form><TextArea className='input-edit' name='bonds' placeholder={this.state.bonds} value={this.state.bonds} onChange={this.handleChange}/></Form></Table.Cell>}
          </Table.Row>
          <Table.Row>
            <Table.Cell>Flaws</Table.Cell>
            {!editMode ? <Table.Cell width={12} >{this.state.flaws}</Table.Cell> : <Table.Cell width={12} textAlign='center'><Form><TextArea className='input-edit' name='flaws' placeholder={this.state.flaws} value={this.state.flaws} onChange={this.handleChange}/></Form></Table.Cell>}
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}

export default Personality
