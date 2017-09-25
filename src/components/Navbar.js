import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'drageons', logged: false }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    if (this.state.logged) {
      return (
        <Segment inverted>
          <Menu stackable inverted pointing secondary>
            <Menu.Item className='nav-link' name='drageons' active={activeItem === 'drageons'} onClick={this.handleItemClick} />
            <Menu.Item className='nav-link' name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />

            <Menu.Menu position='right'>
              <Menu.Item className='nav-link' name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
            </Menu.Menu>
          </Menu>
        </Segment>
      )
    }

    return (
      <Segment inverted>
        <Menu stackable inverted pointing secondary>
          <Menu.Item className='nav-link' name='drageons' active={activeItem === 'drageons'} onClick={this.handleItemClick} />

          <Menu.Menu position='right'>
              <Menu.Item className='nav-link' name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} />
              <Menu.Item className='nav-link' name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}
