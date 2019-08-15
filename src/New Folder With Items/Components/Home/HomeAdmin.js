import React, { Component } from 'react';
import { Route, Link, Switch, Redirect} from 'react-router-dom';
import axios from "axios";
import { MDBFormInline, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

import './Home.css';

import Login from '../Login/Login.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import CardAdmin from '../CardAdmin/CardAdmin';

class HomeAdmin extends Component {

    state = {
      
      adminVacations: [],
	  collapse: false,
	  isWideEnough: false,
      nameUserAdmin:"",
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
    
//Get all vacations for Admin

    componentDidMount=()=>{
		let currUser = JSON.parse(localStorage.currentUser); //get info about current admim from LS
		console.log('currentUser: ',currUser);
        
       // this.setState({ userNameAdmin: currUser.data.data[0].first_name }); //save name of current admin
		
        var self=this;
        axios.get(`http://localhost:5000/getAllVacationAdmin`)
        .then(function(response){
		
         console.log(response.data);
         
		 self.setState({ adminVacations: response.data });
		
        })
        .catch(function(error){
           console.log(error);
        });
      } 

      
// print all vacations

      printCardsAdm=()=>{
        let printArrayAdm  = [];
		console.log(this.state.adminVacations);
		for(let item of this.state.adminVacations)
        { 
			item.start_date=item.start_date.substring(0,10) //this function cut the date to normal without zone time
            item.end_date=item.end_date.substring(0,10)
            printArrayAdm.push(<CardAdmin key={item.id} data={item}/>)   
		}
        console.log('printArray: ',printArrayAdm);
        return printArrayAdm;
      }

// add new vacation

// update vacation
   
      
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

			<MDBView src="https://99px.ru/sstorage/53/2016/06/tmb_168378_7165.jpg" fixed="top">
			  <MDBMask className="flex-center flex-column text-white text-center">
				<h2>OUR VACATIONS</h2>

                    <div className="row">
                        {this.printCardsAdm()}
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
  

		  <div className="row">
           <Link to="/Login">Back to Login</Link>
           <Route path="/Login" exact component={Login} />
           </div>
   
		</div>
  
    );
  }
}
    
export default HomeAdmin;
