import React, {Component} from 'react';
import './index.scss';
//Reactstrap
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

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
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Mat<span>Chat</span></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                                <NavLink href="/calendar">Calendar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/dashboard">Dashboard</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/search">Search</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/">Log out</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                <DropdownItem>
                                    <NavLink href="/calendar">Calendar</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/dashboard">Dashboard</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/search">Search</NavLink>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavLink href="/">Log out</NavLink>
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}