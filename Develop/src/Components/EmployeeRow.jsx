import React from 'react'

export default class EmployeeRow extends React.Component {
    render() {
        return (
                <tr id={this.props.employee.id}>
                <td>{this.props.employee.id + 1}</td>
                <td>{this.props.employee.name.last}</td>
                <td>{this.props.employee.name.first}</td>
                <td>{this.props.employee.gender}</td>
                <td>{this.props.employee.phone}</td>
                <td>{this.props.employee.email}</td>
                <td>{this.props.employee.dob}</td>
                <td>{this.props.employee.address.street.number} {this.props.employee.address.street.name}, {this.props.employee.address.city}, {this.props.employee.address.state} {this.props.employee.address.zip}</td>
                </tr>
        )
    }
}