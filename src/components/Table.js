/* eslint-disable react/prop-types */
import React from 'react'
import { Table } from 'semantic-ui-react'

export default function TableExamplePagination(props) {
  console.log(props)
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Device ID</Table.HeaderCell>
          <Table.HeaderCell>Time</Table.HeaderCell>
          <Table.HeaderCell>Temperature</Table.HeaderCell>
          <Table.HeaderCell>Intensity</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.props.map((item) => (
          <Table.Row>
            <Table.Cell>{item[3]}</Table.Cell>
            <Table.Cell>{item[2]}</Table.Cell>
            <Table.Cell>{item[1]}</Table.Cell>
            <Table.Cell>{item[0]}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
