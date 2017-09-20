import React, { Component } from 'react'
import { Table, Modal, Header } from 'semantic-ui-react'

class Armor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stealth: 'False',
      dexBonus: 'False'
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

  render() {
    return (
      <Modal trigger={<Table.Row>
                        <Table.Cell>{this.props.name}</Table.Cell>
                        <Table.Cell>{this.props.category}</Table.Cell>
                        <Table.Cell textAlign='center'>{this.props.acBase}</Table.Cell>
                        <Table.Cell textAlign='center'>{this.state.dexBonus}</Table.Cell>
                        <Table.Cell textAlign='center'>{this.state.stealth}</Table.Cell>
                        <Table.Cell textAlign='center'>{this.props.costValue} {this.props.costUnit}</Table.Cell>
                        <Table.Cell textAlign='center'>{this.props.weight}</Table.Cell>
                      </Table.Row>} basic size='small' closeIcon>
        <Header as='h1' icon='shield' content={this.props.name} />
        <Modal.Content>
          <h3>{this.props.description}</h3>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Armor
