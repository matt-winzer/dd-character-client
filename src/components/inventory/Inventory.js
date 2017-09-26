import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react'

import Spinner from '../Spinner'
import Weapons from './weapons/Weapons'
import Items from './items/Items'
import Armors from './armors/Armors'
import Currency from './currency/Currency'

import AddWeaponList from './weapons/AddWeaponList'

class Inventory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addWeapon: false,
      baseUrl: `${props.baseUrl}weapon`
    }
  }

  toggleAddWeapon = () => {
    const addWeapon = !this.state.addWeapon
    this.setState({
      ...this.state,
      addWeapon: addWeapon
    })
  }

  render() {
    const addWeapon = this.state.addWeapon

    if (this.props.character) {
      return (
        <Grid stackable>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Weapons  baseUrl={this.props.baseUrl}
                        weapons={this.props.character.weapons}/>
            </Grid.Column>
            <Grid.Column>
              <Armors baseUrl={this.props.baseUrl}
                      armors={this.props.character.armors}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Items  baseUrl={this.props.baseUrl}
                      items={this.props.character.items}/>
            </Grid.Column>
            <Grid.Column>
              <Currency id={this.props.character.id}
                        baseUrl={this.props.baseUrl}
                        copper={this.props.character.copper}
                        silver={this.props.character.silver}
                        gold={this.props.character.gold}
                        electrum={this.props.character.electrum}
                        platinum={this.props.character.platinum}/>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Button onClick={this.toggleAddWeapon} content='Add Weapon'/>
              {addWeapon &&
                <AddWeaponList  id={this.props.character.id}
                            baseUrl={this.props.baseUrl}/>
              }

            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
    }
    return <Spinner />
  }

}

export default Inventory;
