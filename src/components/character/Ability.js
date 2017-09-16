import React, { Component } from 'react'
import { Table, Modal, Icon, Header } from 'semantic-ui-react'
import Spinner from '../Spinner'

class Ability extends Component {
  constructor(props) {
  super(props)
  this.state = {description: null}
  }

  componentDidMount() {
    console.log('compnentDidMount');
    fetch(this.props.url)
      .then(response => response.json())
      .then(ability => {
        const description = this.props.createModalDescription(ability.desc)
        this.setState({
          description: description
        })
        console.log(this.state);
      })

  }

  render() {
    return (
      <Modal trigger={<Table.Row>
                        <Table.Cell>{this.props.name}</Table.Cell>
                        <Table.Cell textAlign='center'>{this.props.value}</Table.Cell>
                        <Table.Cell textAlign='center'>{this.props.modifier}</Table.Cell>
                      </Table.Row>} basic size='small' closeIcon>
        <Header as='h1' icon='universal access' content={this.props.name} />
        <Modal.Content>
          {this.state.description || 'Content Unavailable'}
        </Modal.Content>
      </Modal>
    )
  }
}

export default Ability
