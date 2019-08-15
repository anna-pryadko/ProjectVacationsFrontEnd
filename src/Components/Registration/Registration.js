import React, { Component }  from 'react';
import { Route, Link, Switch,Redirect} from 'react-router-dom';
import {Container, Col, Form,FormGroup, Label, Input,Button,} from 'reactstrap';
import {MDBMask, MDBView } from 'mdbreact';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from "axios";

import './Registration.css';

import HomeAdmin from '../Home/HomeAdmin';
import HomeUser from '../Home/HomeUser';
import Registration from '../Registration/Registration';

class ModalLogin extends Component {
    
    state={
        firstName:"",
        lastName:"",
        userName:"",
        password:"",
    
        currentUser:"",
        //currentRole:"",
        //currentUserName:"",
        // isLoginSuccess:"",
    
        loggedIn:"",
       
       }  

handleClick=()=>{ 
          
          let firstName=this.state.firstName;
          let lastName=this.state.lastName; 
          let password=this.state.password;
          let userName=this.state.userName; 
      
          console.log(password,userName);
          var self=this;
          axios.get(`http://localhost:5000/registration?firstName=${firstName}&lastName=${lastName}&name=${userName}&password=${password}`,{withCredentials:true})
          .then(function(response){
            
          console.log('currentUser',response.data);

          self.setState({currentUser: response.data}); 

          self.setUserAccess();
           
          })
          .catch(function(error){
            console.log(error);
          });
         
      } 

      setUserAccess=()=>{      

      let localUser = this.state.currentUser;

      if(localUser!=={}){  
        localStorage.currentUser=JSON.stringify(localUser); //save user to localstorage 
        localStorage.currentUserName=JSON.stringify(localUser[0].first_name)
        localStorage.currentUserId=JSON.stringify(localUser[0].id)

        this.setState({loggedIn:true}) 
        
        // this.setState({currentRole: localUser[0].role})

        // console.log("localUser[0].role",localUser[0].role)
        
      } 
      else {
        alert('Name already exist!')
      } 
    }

render() {
    
    console.log("userName : " , this.state.userName);
    console.log("password : " , this.state.password);

    console.log("loggedIn : " , this.state.loggedIn);

    console.log("currentUser : " , this.state.currentUser);

    //console.log("currentRole : " , this.state.currentUser[0].role);

   if (this.state.currentUser!=="") {
   
     if (this.state.loggedIn == true){   // redirect to Admin/User
      return  <Redirect to="/HomeUser"/>
     }
    }
    
    //  if (this.state.loggedIn == false){   // redirect to Login/Registration
    //   return  <Redirect to="/Login"/>
    //  }
        
    return (
   
      <div className="Main">                  
              <Container className="App">
                 <div className="row">
                 <div className="loginBox col-md-4">
                   <h2 className="mb-2">REGISTRATION</h2>
                   <AvForm className="form">
                   <Col>
                       <FormGroup>
                       <Label className="lableBox" for="firstName">Enter first name</Label>
                         <AvField
                           type="text"
                           name="firstName"
                           id="firstName"
                           placeholder="Enter first name"
                           onChange = {(event,target) => this.setState({firstName:event.target.value})}
                           value={this.state.firstName}
                           errorMessage="Invalid name" validate={{
                           required: {value: true},
                          pattern: {value: '^[A-Za-z]+$'},
                          minLength: {value: 2},
                          maxLength: {value: 10}
}} 
                         />
                       </FormGroup>
                     </Col>

                     <Col>
                       <FormGroup>
                       <Label className="lableBox" for="lastName">Enter last name</Label>
                         <AvField
                           type="text"
                           name="lastName"
                           id="lastName"
                           placeholder="Enter last name"
                           onChange = {(event,target) => this.setState({lastName:event.target.value})}
                           value={this.state.lastName}
                           errorMessage="Invalid name" validate={{
                           required: {value: true},
                          pattern: {value: '^[A-Za-z]+$'},
                          minLength: {value: 2},
                          maxLength: {value: 10}
}} 
                         />
                       </FormGroup>
                     </Col>

                     <Col>
                       <FormGroup>
                       <Label className="lableBox" for="userName">Enter user name (email)</Label>
                         <AvField
                           type="email"
                           name="userName"
                           id="userName"
                           placeholder="Enter user name (email)"
                           onChange = {(event,target) => this.setState({userName:event.target.value})}
                           value={this.state.userName}
                           errorMessage="Invalid name" validate={{
                           required: {value: true}
                          //  pattern: {value: '^[A-Za-z0-9]+$'},
                          //  minLength: {value: 6},
                          //  maxLength: {value: 16}
}} 
                         />
                       </FormGroup>
                     </Col>
                     <Col>
                       <FormGroup>
                         <Label className="lableBox" for="Password">Password (6 symbols)</Label>
                         <AvField
                           type="password"
                           name="password"
                           id="password"
                           placeholder="******"
                           onChange = {(event,target) => this.setState({password:event.target.value})}
                           value={this.state.password}
                           errorMessage="Invalid password" validate={{
                            required: {value: true},
                            pattern: {value: '^[A-Za-z0-9]+$'},
                            minLength: {value: 6},
                            maxLength: {value: 6}
          }} />
                        
                       </FormGroup>
                     </Col>
              <button type="submit" className="offset-5" onClick={() =>this.handleClick()}>Sing In</button>
                
                   </AvForm>
                   </div>
                   </div>
                 </Container>
                 
                 </div>  
              
    );
}
}

export default ModalLogin