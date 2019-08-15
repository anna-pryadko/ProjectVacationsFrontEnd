import React from 'react';
import axios from "axios";
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

import './Menu.css';  

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  LogOut=()=> {
    var self=this;
    axios.get(`http://localhost:5000/Logout`,{withCredentials:true})
    .then(function(response){
      
      console.log(response.data);
      localStorage.clear();
    // self.setState({ isLogin: response.data });
    })
    .catch(function(error){
       console.log(error);
    });

  }
  render() {
    return (
 
        <Navbar  className="mainMenu" sticky-top light expand="md">
          <NavbarBrand className="hello">Hello, {this.props.name}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto">
              {/* <NavItem>
                <NavLink className="linkMenu" href="/Charts">Charts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="linkMenu" href="/AddVacation">Add Vacation</NavLink>
              </NavItem> */}
              <NavItem>
                <NavLink className="linkMenu" href="/" onClick={() =>this.LogOut()}>LogOut</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    
      
    );
  }
}