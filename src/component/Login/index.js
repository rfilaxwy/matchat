import React, {Component} from 'react';

import {Link} from 'react-router-dom';

//Bootstrap/Reactstrap
import { Col, Button, Form, FormGroup, Label, Input, FormText, Row } from 'reactstrap';

export default class Login extends Component {

    render(){
        return(
            <Form>
                <FormGroup row> 
                    <Col sm={2} />                   
                    <Label for="userName" sm={2}>Username</Label>
                    <Col sm={4}> 
                        <Input type="userName" name="userName" id="userName" placeholder="Username" />
                    </Col>          
                </FormGroup>
                <FormGroup row>
                    <Col sm={2} />
                    <Label for="password" sm={2}>Password</Label>
                    <Col sm={4}>
                        <Input type="password" name="password" id="password" placeholder="Password" />
                    </Col>
                </FormGroup>
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
                <Link to="/">
                    <Button>Cancel</Button>
                </Link>  
            </Form>
        )
    }
}