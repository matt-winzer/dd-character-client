import React, { Component } from 'react'
import { Table, Modal, Header, Button, Icon, Input } from 'semantic-ui-react'

class Spell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      savingData: false,
      description: null,
      characterId: props.characterId,
      name: props.name,
      range: props.range,
      ritual: props.ritual,
      duration: props.duration,
      concentration: props.concentration,
      castingTime: props.castingTime,
      level: props.level,
      magicSchool: props.magicSchool,
      className: props.className,
      baseUrl: `${props.baseUrl}character`
    }
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(spell => {
        const description = this.props.createModalDescription(spell.desc)
        this.setState({
          description: description
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

  saveEdits = (id, characterId) => {
    const editMode = !this.state.editMode
    const url = `${this.state.baseUrl}/${characterId}/ability/${id}`
    const options = {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        value: this.state.value,
        modifier: this.state.modifier
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
      <Modal  trigger={<Table.Row>
                        <Table.Cell>{this.state.name}</Table.Cell>
                        <Table.Cell textAlign='center'>{this.state.level}</Table.Cell>
                        <Table.Cell textAlign='center'>{this.state.magicSchool}</Table.Cell>
                      </Table.Row>}
              size='small'
              closeIcon>
        <Header as='h1' floated='left'>
          <Icon name='universal access'/>
          {this.state.name}
        </Header>
        <Header as='h1' floated='right'>
          {!editMode ? <Button disabled circular className='editButton' icon='edit' color='grey' content='Edit' onClick={this.toggleEditMode}/> : <Button circular className='editButton' icon='save' color='green' content='Save' loading={savingData ? true : false} onClick={this.saveEdits.bind(null, this.props.id, this.state.characterId)}/>}
        </Header>
        <Modal.Content className='scrolling-modal-content' scrolling>
          <Table className='modal-table' compact={editMode ? true : false} celled striped unstackable color='green'>
              <Table.Header className='modal-table-header' fullWidth>
                <Table.Row>
                  <Table.HeaderCell colSpan='2'>
                    {this.state.description || 'No description available.'}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={5}><strong>Level</strong></Table.Cell>
                {!editMode ? <Table.Cell>{this.state.level}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='magic_shool' placeholder={this.state.level} value={this.state.level} onChange={this.handleChange}/></Table.Cell>}
              </Table.Row>
              <Table.Row>
                <Table.Cell width={5}><strong>Magic School</strong></Table.Cell>
                {!editMode ? <Table.Cell>{this.state.magicSchool}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='magic_shool' placeholder={this.state.magicSchool} value={this.state.magicSchool} onChange={this.handleChange}/></Table.Cell>}
              </Table.Row>
              <Table.Row>
                <Table.Cell width={5}><strong>Range</strong></Table.Cell>
                {!editMode ? <Table.Cell >{this.state.range}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='range' placeholder={this.state.range} value={this.state.range} onChange={this.handleChange}/></Table.Cell>}
              </Table.Row>
              <Table.Row>
                <Table.Cell width={5}><strong>Ritual</strong></Table.Cell>
                {!editMode ? <Table.Cell>{this.state.ritual}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='magic_shool' placeholder={this.state.ritual} value={this.state.ritual} onChange={this.handleChange}/></Table.Cell>}
              </Table.Row>
              <Table.Row>
                <Table.Cell width={5}><strong>Duration</strong></Table.Cell>
                {!editMode ? <Table.Cell>{this.state.duration}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='magic_shool' placeholder={this.state.duration} value={this.state.duration} onChange={this.handleChange}/></Table.Cell>}
              </Table.Row>
              <Table.Row>
                <Table.Cell width={5}><strong>Concentration</strong></Table.Cell>
                {!editMode ? <Table.Cell>{this.state.concentration}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='magic_shool' placeholder={this.state.concentration} value={this.state.concentration} onChange={this.handleChange}/></Table.Cell>}
              </Table.Row>
              <Table.Row>
                <Table.Cell width={5}><strong>Casting Time</strong></Table.Cell>
                {!editMode ? <Table.Cell>{this.state.castingTime}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid className='input-edit' name='magic_shool' placeholder={this.state.castingTime} value={this.state.castingTime} onChange={this.handleChange}/></Table.Cell>}
              </Table.Row>
            </Table.Body>
          </Table>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Spell
