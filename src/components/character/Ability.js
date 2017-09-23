import React, { Component } from 'react'
import { Table, Modal, Label, Header } from 'semantic-ui-react'

class Ability extends Component {
  constructor(props) {
    super(props)
    this.state = {description: null}
  }

  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(ability => {
        const description = this.props.createModalDescription(ability.desc)
        const skills = this.getAbilitySkills(ability.skills)
        this.setState({
          description: description,
          skills: skills
        })
      })
  }

  getAbilitySkills(skillsArray) {
    return skillsArray.map(skill => {
      return <Label color='blue' key={skill.name}>{skill.name}</Label>
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
          <br></br>
          {this.state.skills || ''}
        </Modal.Content>
      </Modal>
    )
  }
}

export default Ability
