import React, { Component } from 'react';
import { Route, Link, Switch,Redirect} from 'react-router-dom';
import axios from "axios";
import { MDBFormInline, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

import './Home.css';

import Login from '../Login/Login.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Card from '../Card/Card';

class Home extends Component {

    state = {
      
	  allVacations: [],
	  collapse: false,
	  isWideEnough: false,
    
	};
	
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 	  collapse: false,
	// 	  isWideEnough: false,
	// 	  allVacation:[],
	// 	};
	// 	this.onClick = this.onClick.bind(this);
		
	//   }
	
	  onClick() {
		this.setState({
		  collapse: !this.state.collapse,
		});
	  }
	
	  //Get all vacations

    componentDidMount=()=>{
		let currUser = JSON.parse(localStorage.currentUser);
		console.log('currentUser: ',currUser);
		let currentUserId=currUser.data[0].id;
		console.log('currentUserId: ',currentUserId);
        var self=this;
        axios.get(`http://localhost:5000/getAllVacation?currentUserId=${currentUserId}`)
        .then(function(response){
		 
		// console.log(this.state.allVacations);
	
         console.log(response.data);
         
		 self.setState({ allVacations: response.data });
		// console.log(this.state.allVacations);

        })
        .catch(function(error){
           console.log(error);
        });
      } 
      
      printCards=()=>{
		let printArray  = [];
		console.log(this.state.allVacations);
        for(let item of this.state.allVacations)
        {
            console.log(item);
            printArray.push(<Card key={item.id} data={item}/>)
      
		}
		console.log('printArray',printArray);
        return printArray;
      }
    

  render() {
    return (
	
		<div>
		  <header>
		   
			  <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
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
			
  
			<MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg" fixed="top">
			  <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
				<h2>OUR VACATIONS</h2>
				<div className="container">
					<div className="row">
						{this.printCards()}
					</div>
		        </div>
				{/* <Router> */}
				{/* <Switch> */}
				  {/* <Route path="/" exact component={Jumbotron} />
				  <Route path="/Home" exact component={Home} />
				  <Route path="/Login" exact component={ModalLogin} />
				  <Route path="/Registration" exact component={Registration} /> */}
				  
				  {/* <Route path="/HomeAdmin" exact component={HomeAdmin} />
				  <Route path="/HomeUser" exact component={HomeUser} /> */}
				{/* </Switch> */}
				{/* </Router> */}
				{/* <h5>It will always stay visible on the top, even when you scroll down</h5>
				<p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
				<p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p> */}
			  </MDBMask>
			</MDBView>
			
		  </header>
  
		  <main>
			<MDBContainer className="text-center my-5">
			  <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</MDBContainer>
		  </main>

		  <div className="row">
           <button type="button"><Link to="/Login">Back to Login</Link></button>
           <Route path="/Login" exact component={Login} />
           </div>
   
		</div>
  
    );
  }
}
    
export default Home;
