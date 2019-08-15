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
import Menu from '../Menu/Menu';

class HomeAdmin extends Component {

    state = {
      
	  adminVacations: [],
	  
	  currentAdminName:"",
	  
	};
	
    
//Get all vacations for Admin

    componentDidMount=()=>{
		let currUser = JSON.parse(localStorage.currentUserName); //get info about current admim from LS
		this.setState({currentAdminName:currUser});
			
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
	<div className="menuAdm">
		<Menu name={this.state.currentAdminName}></Menu>
	</div>
	<div className="container">
		
		<h1>OUR VACATIONS</h1>

        <div className="row boxCards">
			{this.printCardsAdm()}
        </div>    
		      
	</div>
</div>
    );
  }
}
    
export default HomeAdmin;
