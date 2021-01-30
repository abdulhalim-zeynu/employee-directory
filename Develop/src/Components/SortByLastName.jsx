import React from 'react'
import {Button, Container} from 'react-bootstrap'

export default class EmployeeRow extends React.Component {

    render() {
        return <Button onClick={() => this.props.handleSortByLastName()} variant="success">Sort Last Name</Button>
    }
}