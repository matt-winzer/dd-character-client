import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'drageons', logged: false }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    if (this.state.logged) {
      return (
      <Menu size='huge' inverted stackable fixed>
        <Menu.Item name='drageons' active={activeItem === 'drageons'} onClick={this.handleItemClick} />
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
          <Menu.Item name='log out' active={activeItem === 'log out'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
      )
    }
    return (
      <Menu size='huge' inverted stackable fixed='top'>
        <Menu.Item name='drageons' active={activeItem === 'drageons'} onClick={this.handleItemClick} />
        <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />

        <Menu.Menu position='right'>
            <Menu.Item name='sign up' active={activeItem === 'sign up'} onClick={this.handleItemClick} />
            <Menu.Item name='log in' active={activeItem === 'log in'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}
