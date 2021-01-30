import React from 'react'
import {Table} from 'react-bootstrap'

import EmployeeRow from './EmployeeRow'

export default class EmployeeTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const employeeRows = () => {
            const rows = this.props.employees
            
            return rows.map((employee, index) => (
                    <EmployeeRow employee={employee} key={index} />
                )
            )
        }

        return (
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>E-Mail</th>
                    <th>D-O-B</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeRows()}
                </tbody>
            </Table>
        )
    }
}