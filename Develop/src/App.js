import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'

import "./App.css"
import EmployeeTable from './Components/EmployeeTable'
import SortByLastName from './Components/SortByLastName'
import FilterByEmail from "./Components/FilterByEmail";

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      employees: []
    }

    this.handleSortByLastName = this.handleSortByLastName.bind(this)
    this.handleFilterByEmail = this.handleFilterByEmail.bind(this)
  }

  componentDidMount() {
    this.getRandomEmployeeData()
  }

  getRandomEmployeeData() {
    fetch("https://randomuser.me/api/?results=50&nat=us")
      .then(res => res.json())
      .then(data => {
        let employeeList = []
        for(let i = 0; i < data.results.length; i++) {
          const employee = {
            gender: data.results[i].gender.charAt(0).toUpperCase() + data.results[i].gender.slice(1),
            name: data.results[i].name,
            address: {
              street: data.results[i].location.street,
              city: data.results[i].location.city,
              state: data.results[i].location.state,
              zip: data.results[i].location.postcode
            },
            email: data.results[i].email,
            dob: data.results[i].dob.date.split("T")[0],
            phone: data.results[i].phone.replace(/\D/g, ""),
            id: i 
          }
          employeeList.push(employee)
      }
      this.setState({employees: employeeList})
    })
  }

  handleSortByLastName() {
    let sortedEmployees = this.state.employees
    sortedEmployees.sort((a,b) => (a.name.last > b.name.last) ? 1 : ((b.name.last > a.name.last) ? -1 : 0))

    this.setState({employees: sortedEmployees})
  }

  handleFilterByEmail(e) {
    const email = e.target.value
    const filterEmployees = this.state.employees.filter(employee => employee.email.includes(email))

    this.setState({employees: filterEmployees})
  }

  render() {
    return (
      <div className="App">
        <Container>
          {console.log(this.state)}
          {this.state.employees.length > 0 ? 
            (
            <div className="main">

              <Row>
                <Col>
                  <SortByLastName handleSortByLastName={this.handleSortByLastName}/>
                </Col>
                <Col>
                  <FilterByEmail handleFilter={this.handleFilterByEmail}/>
                </Col>
              </Row>
              
              <EmployeeTable className="table" employees={this.state.employees} />
            </div>
            ) : "Loading..."}
        </Container>
      </div>
    )
  }
}