import React, {Component} from 'react';
import './index.scss';

import {Link} from 'react-router-dom';

//Bootstrap/Reactstrap
import { Col, Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';

//Custom
import Handler from '../Handler'


export default class Landing extends Component {
    constructor(){
        super();
        this.state = {
            firstname:'',
            username:'',
            email:'',
            password:'',
            city:'',
            country:''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let input = event.target.name;
        let val = event.target.value;
        console.log(val)
        switch (input){
            case 'firstname':
                this.setState({firstname:val});
                break;
            case 'username':
                this.setState({username:val});
                break;
            case 'email':
                this.setState({email:val});
                break;
            case 'password':
                this.setState({password:val});
                break;
            case 'city':
                this.setState({city:val});
                break;
            case 'country':
                this.setState({country:val});
                break;
        }
    }



    render(){
        return(
        <Form>
            <Row form>
            <Col sm={2} />
                <Col sm={4}>
                    <FormGroup>
                        <Label for="firstName">First name</Label>
                        <Input onChange={(e) => Handler(e)} type="firstName" name="firstName" id="firstName" placeholder="First name" />
                    </FormGroup>
                </Col>
                <Col sm={4}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input onChange={(e) => Handler(e)} type="username" name="username" id="username" placeholder="Minimum 5 characters" />
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col sm={2} />
                <Col sm={4}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input onChange={(e) => Handler(e)} type="email" name="email" id="email" placeholder="Email" />
                    </FormGroup>
                </Col>
                <Col sm={4}>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input onChange={(e) => Handler(e)} type="password" name="password" id="password" placeholder="Minimum of 8 characters" />
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col sm={2} />
                <Col sm={4}>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input onChange={(e) => Handler(e)} type="text" name="city" id="city" placeholder="City"/>
                    </FormGroup>
                </Col>
                <Col sm={4}>
                    <FormGroup>
                        <Label for="country">Country</Label>
                        <Input onChange={(e) => Handler(e)} type="text" name="country" id="country" placeholder="Country"/>
                    </FormGroup>
                </Col>
            </Row>
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