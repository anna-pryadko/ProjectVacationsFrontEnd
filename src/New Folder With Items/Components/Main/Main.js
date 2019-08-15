import React, { Component } from 'react';
import { Route, Link, Switch,Redirect} from 'react-router-dom';
import { MDBFormInline, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

import Jumbotron from '../Jumbotron/Jumbotron';
//import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import HomeUser from '../Home/HomeUser';
import HomeAdmin from '../Home/HomeAdmin';
import ModalLogin from '../ModalLogin/ModalLogin';


//import reducer from '../../reducers';

class Main extends Component {
    state = {

      checkCookie:"",
      userRole:"",
      
      currentUser:{},

    };

      componentDidMount=()=>{
        
        if (localStorage.currentUser) {
          let currUser = JSON.parse(localStorage.currentUser) 
          this.setState({ currentUser: currUser });
          this.setState({ userRole: currUser.role });
          
     }

        var self=this;
        axios.get(`http://localhost:5000/checkCookie`,{withCredentials:true})
        .then(function(response){
          
         console.log('checkCookie',response.data); // 1 or 0
        
         self.setState({ checkCookie: response.data });

        })
        .catch(function(error){
           console.log("Error",error);
        });
        console.log(this.state.checkCookie);
    
      }
      
  render() {

  console.log("checkCookie", this.state.checkCookie)

   let loggedIn = this.state.checkCookie === '1'

   console.log("LOGGWD", loggedIn)
   console.log("userRole", this.state.userRole)

    if (loggedIn == true && this.state.userRole =='0'){ 
      return  <Redirect to="/HomeAdmin"/>
     }
     
     if (loggedIn == true && this.state.userRole =='1'){   // redirect to Admin/User
      return  <Redirect to="/HomeUser"/>
     }
    
     if (loggedIn == false){   // redirect to Login/Registration
      return  <Redirect to="/Login"/>
     }
    
    return (
      <div>

      <div>
        <header>
         
            {/* <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
              <MDBNavbarBrand href="/">
                <strong>Menu</strong>
              </MDBNavbarBrand>
              {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBNavLink to="#">Home</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">About</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">Profile</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
				<MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
           */}

          <MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg" fixed="top">
            <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
              <h2>OUR VACATIONS</h2>
              {/* <Router>
              <Switch>
                <Route path="/Jumbotron" exact component={Jumbotron} /> 
              </Switch>
              </Router> */}
              {/* <h5>It will always stay visible on the top, even when you scroll down</h5>
              <p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
              <p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p> */}
            </MDBMask>
          </MDBView>
          
        </header>

        <main>
          <MDBContainer className="text-center my-5">
            {/* <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
          </MDBContainer>
        </main>

      </div>

    </div>
    
    );
  }
  }
  export default Main;
  