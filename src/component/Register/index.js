import React, {Component} from 'react';
import './index.scss';

import {Link} from 'react-router-dom';

//Bootstrap/Reactstrap
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

export default class Landing extends Component {

    render(){
        return(
        <Form>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="firstName">First name</Label>
                        <Input type="firstName" name="firstName" id="firstName" placeholder="First name" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input type="username" name="username" id="username" placeholder="Minimum 5 characters" />
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" placeholder="Email" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" placeholder="Minimum of 8 characters" />
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col md={6}>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="text" name="city" id="city" placeholder="City"/>
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <FormGroup>
                        <Label for="country">Country</Label>
                        <Input type="text" name="country" id="country" placeholder="Country"/>
                    </FormGroup>
                </Col>
            </Row>
            <FormGroup check>
                <Input type="checkbox" name="check" id="exampleCheck"/>
                <Label for="exampleCheck" check>Check me out</Label>
            </FormGroup>
            <Link to="/login">
                <Button>Submit</Button>
            </Link>
            <Link to="/">
                <Button>Cancel</Button>
            </Link>
        </Form>
        )  
    }
}