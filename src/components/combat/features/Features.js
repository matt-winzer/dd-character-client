import React from 'react'
import { Table } from 'semantic-ui-react'

import Feature from './Feature'

const Features = (props) => {
  const features = props.features.map(feature => {
    return <Feature key={feature.id}
                    id={feature.id}
                    baseUrl={props.baseUrl}
                    characterId={props.id}
                    name={feature.name}
                    level={feature.level}
                    className={feature.class.name}
                    url={feature.url}
                    createModalDescription={props.createModalDescription}/>
  })

  return (
    <Table celled selectable unstackable inverted color='green'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Feature</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Level</Table.HeaderCell>
          <Table.HeaderCell textAlign='center'>Class</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {features}
      </Table.Body>
    </Table>
  )
}

export default Features
