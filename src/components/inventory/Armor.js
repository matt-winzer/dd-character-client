import React, { Component } from 'react'
import { Table, Modal, Header, Button, Input } from 'semantic-ui-react'

class Armor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      stealth: 'False',
      dexBonus: 'False',
      name: props.name,
      category: props.category,
      acBase: props.acBase,
      costValue: props.costValue,
      costUnit: props.costUnit,
      weight: props.weight,
      acMax: props.acMax,
      minStrength: props.minStrength

    }
  }

  componentDidMount() {
    if (this.props.stealth) {
      this.setState({
        ...this.state,
        stealth: 'True'
      })
    }
    if (this.props.dexBonus) {
      this.setState({
        ...this.state,
        dexBonus: 'True'
      })
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
    console.log(this.state);
  }

  render() {
      const editMode = this.state.editMode

      return (
        <Modal trigger={<Table.Row>
                          <Table.Cell>{this.state.name}</Table.Cell>
                          <Table.Cell textAlign='center'>{this.state.acBase}</Table.Cell>
                          <Table.Cell textAlign='center'>{this.state.costValue} {this.state.costUnit}</Table.Cell>
                        </Table.Row>} size='tiny' closeIcon>
          <Header as='h1' icon='shield' content={'Armor - ' + this.state.name} />
          <Modal.Content>
            <Button icon={editMode ? 'save' : 'edit'} content={editMode ? 'Save' : 'Edit'} color={editMode ? 'red' : 'green'} inverted onClick={this.toggleEditMode} />
            <Table celled striped unstackable color='brown'>
              <Table.Header>
                <Table.HeaderCell>Property</Table.HeaderCell>
                <Table.HeaderCell>Value</Table.HeaderCell>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell><strong>Name</strong></Table.Cell>
                  <Table.Cell>{this.state.name}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><strong>Category</strong></Table.Cell>
                  <Table.Cell>{this.state.category}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><strong>AC Base</strong></Table.Cell>
                  {!editMode ? <Table.Cell>{this.state.acBase}</Table.Cell> : <Table.Cell textAlign='center'><Input fluid name='acBase' placeholder={this.state.acBase} value={this.state.acBase} onChange={this.handleChange}/></Table.Cell>}
                </Table.Row>
                <Table.Row>
                  <Table.Cell><strong>AC Max Bonus</strong></Table.Cell>
                  <Table.Cell>{this.state.acMax || 'N/A'}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><strong>Dex Bonus</strong></Table.Cell>
                  <Table.Cell>{this.state.dexBonus}</Table.Cell>
                </Table.Row>
                <Table.Row>
                <Table.Cell><strong>Stealth Disadvantage</strong></Table.Cell>
                  <Table.Cell>{this.state.stealth}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><strong>Strength Minimum</strong></Table.Cell>
                  <Table.Cell>{this.state.minStrength}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><strong>Cost</strong></Table.Cell>
                  <Table.Cell>{this.state.costValue} {this.state.costUnit}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell><strong>Weight</strong></Table.Cell>
                  <Table.Cell>{this.state.weight}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Modal.Content>
        </Modal>
      )


  }
}

export default Armor
