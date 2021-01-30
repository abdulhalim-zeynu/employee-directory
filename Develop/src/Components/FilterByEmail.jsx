import React from 'react'
import {Button, Container, FormControl, InputGroup} from 'react-bootstrap'

export default class FilterByEmail extends React.Component {

    render() {
        return (
                <InputGroup onChange={(e) => this.props.handleFilter(e)} className="mb-3">
                    <FormControl
                    placeholder="Filter Emails"
                    aria-label="Email Filter"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="primary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
        )
    }
}