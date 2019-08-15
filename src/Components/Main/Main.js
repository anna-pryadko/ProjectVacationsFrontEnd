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


class Main extends Component {
    state = {

      checkCookie:"",
      userRole:"",
      
      currentUser:{},

    };

      componentDidMount=()=>{
   

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

   if (localStorage.currentUser&&this.state.checkCookie!=="") {
    let currUser = JSON.parse(localStorage.currentUser) 


    console.log("currUser",currUser)


    if (this.state.checkCookie == '1' && currUser[0].role =='1'){ 
      return  <Redirect to="/HomeAdmin"/>
     }
     
     if (this.state.checkCookie == '1' && currUser[0].role =='0'){   // redirect to Admin/User
      return  <Redirect to="/HomeUser"/>
     }

   }

   if (this.state.checkCookie == '0') {   // redirect to Login/Registration
    console.log('login')
    return  <Redirect to="/Login"/>
   }

    return (
      <div>

     </div>
    
    );
  }
  }
  export default Main;
  