import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

//Redux
import {connect} from 'react-redux';
import {getUser} from '../../ducks/reducer';
//Custom
import Handler from '../Handler';

//Auth0
import auth0 from 'auth0-js';

//Bootstrap/Reactstrap
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            password:'',
            alert:''
        }
        this.login = this.login.bind(this);
        
    }
    
    login(){
        const {username, password} = this.state;
        debugger
        axios.post('/api/login',{username, password}).then(res => {
            if(res.data){
                const {firstname,username,city,country} = res.data[0];
                this.props.getUser(firstname,username,city,country);            
                this.props.history.push('/dashboard');
            } else {
                this.setState({username:'', password:''})
                this.setState({alert:'Username password combination not found.'});
            }
        }
      );
    }
    render(){
        return(
            <div>
                <Form>
                    <FormGroup row> 
                        <Col sm={2} />                   
                        <Label for="username" sm={2}>Username</Label>
                        <Col sm={4}> 
                            <Input 
                                type="username" 
                                name="username" 
                                id="username"
                                value={this.state.username} 
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
                                value={this.state.password}
                                placeholder="Password"
                                onChange={(e) => this.setState({password:Handler(e)})}
                                />
                        </Col>
                    </FormGroup>   
                    <Button onClick={this.login}>Login</Button>
                    <Link to="/">
                        <Button onClick={this.cancel}>Cancel</Button>
                    </Link>  
                </Form>
                <h5>{this.state.alert}</h5>
            </div>
        )
    }
}

export default connect(null, {getUser})(Login);