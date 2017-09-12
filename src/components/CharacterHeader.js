import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const CharacterHeader = () => (
  <Header as='h1'>
    <Icon name='spy' />
    <Header.Content>
      Morty g3855
      <Header.Subheader>
        Halfling Monk
      </Header.Subheader>
    </Header.Content>
  </Header>
)

export default CharacterHeader
