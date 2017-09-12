import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const CharacterHeader = (props) => (
  <Header as='h1'>
    <Icon name='spy' />
    <Header.Content>
      {props.name}
      <Header.Subheader>
        {props.race} {props._class}
      </Header.Subheader>
    </Header.Content>
  </Header>
)

export default CharacterHeader
