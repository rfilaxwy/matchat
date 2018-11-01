import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


//Custom
import Handler from '../Handler';

//Auth0
import auth0 from 'auth0-js';

//Bootstrap/Reactstrap
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            password:''
        }
        this.login = this.login.bind(this);
        
    }
    
    login(){
        debugger
        axios.get('/api/login').then(res => {
            debugger
            console.log(res);
        }
      );
    }
    render(){
        return(
            <Form>
                <FormGroup row> 
                    <Col sm={2} />                   
                    <Label for="userName" sm={2}>Username</Label>
                    <Col sm={4}> 
                        <Input 
                            type="userName" 
                            name="userName" 
                            id="userName" 
                            placeholder="Username"
                            onChange={(e) => this.setState({username:Handler(e)})}
                            />
                    </Col>          
                </FormGroup>
                <FormGroup row>
                    <Col sm={2} />
                    <Label for="password" sm={2}>Password</Label>
                    <Col sm={4}>
                        <Input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Password"
                            onChange={(e) => this.setState({password:Handler(e)})}
                            />
                    </Col>
                </FormGroup>
                <Link to="/login">
                    <Button>Login</Button>
                </Link>
                <Link to="/">
                    <Button onClick={this.login}>Cancel</Button>
                </Link>  
            </Form>
        )
    }
}