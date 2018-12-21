import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavItem} from "reactstrap";
import {NavLink} from "react-router-dom";


class Menu extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand className="h1">Expenshare</NavbarBrand>
                <Collapse isOpen={true} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to={this.props.url} exact className="nav-link">Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={this.props.url + "/depenses"} className="nav-link">Dépenses</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to={this.props.url + "/personnes"} className="nav-link">Personnes</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Menu;