import React, {Component} from 'react';
import './index.scss';
import {Link} from 'react-router-dom';
//Reactstrap
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';

export default class Landing extends Component {
    constructor(){
        super();
        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    render(){

        return(
            <div>
                <Navbar id='navBar' color="light" light expand="md">
                    <NavbarBrand href="/">Mat<span>Chat</span></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to='/calendar'><NavLink>Calendar</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/dashboard'><NavLink>Dashboard</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to='/search'><NavLink>Search</NavLink></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/"><NavLink>Log out</NavLink></Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}