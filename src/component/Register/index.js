import React, {Component} from 'react';
import './index.scss';

import {Link} from 'react-router-dom';
import axios from 'axios'
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
        this.register = this.register.bind(this);     
    }

    register(){
        const {firstname,username,email,password,city,country} = this.state;
        axios.post('/api/register',{firstname,username,email,password,city,country}).then(res => {
           debugger
            console.log(res)
            if(res.data){
                alert('Successful registraion please login.')
                this.props.history.push('/login')
            } else {
                alert('Email and username already exist.')
                this.props.history.push('/register');
            } 
        });
    }


    render(){
        return(
        <Form>
            <Row form>
            <Col sm={2} />
                <Col sm={4}>
                    <FormGroup>
                        <Label for="firstname">First name</Label>
                        <Input onChange={(e) => this.setState({firstname:Handler(e)})} type="firstname" name="firstname" id="firstname" placeholder="First name" />
                    </FormGroup>
                </Col>
                <Col sm={4}>
                    <FormGroup>
                        <Label for="username">Username</Label>
                        <Input onChange={(e) => this.setState({username:Handler(e)})} type="username" name="username" id="username" placeholder="Minimum 5 characters" />
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col sm={2} />
                <Col sm={4}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input onChange={(e) => this.setState({email:Handler(e)})} type="email" name="email" id="email" placeholder="Email" />
                    </FormGroup>
                </Col>
                <Col sm={4}>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input onChange={(e) => this.setState({password:Handler(e)})} type="password" name="password" id="password" placeholder="Minimum of 8 characters" />
                    </FormGroup>
                </Col>
            </Row>
            <Row form>
                <Col sm={2} />
                <Col sm={4}>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input onChange={(e) => this.setState({city:Handler(e)})} type="text" name="city" id="city" placeholder="City"/>
                    </FormGroup>
                </Col>
                <Col sm={4}>
                    <FormGroup>
                        <Label for="country">Country</Label>
                        <Input onChange={(e) => this.setState({country:Handler(e)})} type="text" name="country" id="country" placeholder="Country"/>
                    </FormGroup>
                </Col>
            </Row>
                <Button onClick={this.register}>Submit</Button>
            <Link to="/">
                <Button>Cancel</Button>
            </Link>
        </Form>
        )  
    }
}