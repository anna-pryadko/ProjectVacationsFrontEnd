import React, { Component }  from 'react';
import { Route, Link, Switch,Redirect} from 'react-router-dom';
import {Container, Col, Form,FormGroup, Label, Input,Button,} from 'reactstrap';
import {MDBMask, MDBView } from 'mdbreact';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from "axios";

import './Login.css';

import HomeAdmin from '../Home/HomeAdmin';
import HomeUser from '../Home/HomeUser';
import Registration from '../Registration/Registration';

class ModalLogin extends Component {
    
    state={

        userName:"",
        password:"",
    
        currentUser:"",
        currentRole:"",
        isLoginSuccess:"",
    
        loggedIn:"",
    
       }  

handleClick=()=>{ 
          
          let password=this.state.password;
          let userName=this.state.userName; 
          console.log(password,userName);
          var self=this;
          axios.get(`http://localhost:5000/checkLogin?name=${userName}&password=${password}`,{withCredentials:true})
          .then(function(response){
            
          console.log('currentUser',response.data);
            
          self.setState({ currentUser: response.data});
          self.setState({currentRole: response.data[0].role})

          if(response.data!=={}){  
            localStorage.currentUser=JSON.stringify(response.data); //save user to localstorage 
            self.setState({loggedIn:true})  
          } 
          else {
            alert('Name or password incorrect!')
          } 
         // let curUs=response.data;
         // self.setState({ isLoggedIn: true });  
          //localStorage.currentUser=JSON.stringify(curUs);
          // this.setUserAccess();  
          })
          .catch(function(error){
            console.log(error);
          });
         
      } 

      // setUserAccess=()=>{       
      //   let localUser = this.state.currentUser;

      //     if(localUser!=={}){  
      //       localStorage.currentUser=JSON.stringify(localUser); //save user to localstorage 
      //       this.setState({isLoggedIn:true})    
            
            // if (localUser.role=="1")
            //      {
            //       this.setState({isAdmin: true});
            //       console.log("isAdmin",this.state.isAdmin)    
            //      } 
            //      else 
            //        {
            //          this.setState({isAdmin: false});
            //          console.log("isAdmin",this.state.isAdmin)
            //        }          
                  // }  
                  // else {
                  //   alert('Name or password incorrect!')
                  // } 
                //  }

render() {
    
    console.log("userName : " , this.state.userName);
    console.log("password : " , this.state.password);

    console.log("loggedIn : " , this.state.loggedIn);

    console.log("currentUser : " , this.state.currentUser);

    console.log("currentRole : " , this.state.currentRole);


    if (this.state.loggedIn == true && this.state.currentRole ==1){ 
      return  <Redirect to="/HomeAdmin"/>
     }
     
     if (this.state.loggedIn == true && this.state.currentRole ==0){   // redirect to Admin/User
      return  <Redirect to="/HomeUser"/>
     }
    
    //  if (this.state.loggedIn == false){   // redirect to Login/Registration
    //   return  <Redirect to="/Login"/>
    //  }
        
    return (
   
      <div className="Main">                  
              <Container className="App">
                 <div className="row">
                 <div className="loginBox col-md-4">
                   <h2 className="mb-2">LOGIN</h2>
                   <AvForm className="form">
                     <Col>
                       <FormGroup>
                       <Label className="lableBox" for="userName">Enter user name (email)</Label>
                         <AvField
                           type="email"
                           name="userName"
                           id="userName"
                           placeholder="Enter user name (mail)"
                           onChange = {(event,target) => this.setState({userName:event.target.value})}
                           value={this.state.userName}
                           errorMessage="Invalid name" validate={{
                           required: {value: true},
                           pattern: {value: '^[A-Za-z0-9]+$'},
                           minLength: {value: 6},
                           maxLength: {value: 16}
}} 
                         />
                       </FormGroup>
                     </Col>
                     <Col>
                       <FormGroup>
                         <Label for="Password">Password</Label>
                         <AvField
                           type="password"
                           name="password"
                           id="examplePassword"
                           placeholder="****"
                           onChange = {(event,target) => this.setState({password:event.target.value})}
                           value={this.state.password}
                           errorMessage="Invalid password" validate={{
                            required: {value: true},
                            pattern: {value: '^[A-Za-z0-9]+$'},
                            minLength: {value: 6},
                            maxLength: {value: 16}
          }} />
                        
                       </FormGroup>
                     </Col>
              <button type="submit" className="offset-5" onClick={() =>this.handleClick()}>login</button>
              {/* <button type="button" className="btn btn-primary offset-1 " ><Link to="/Regester">Regester Now</Link></button>  */}
              <div className="font-weight-light">
                  <p>Not a member? <Link to="/Registration">Sign Up</Link></p>  
                </div>    
                   </AvForm>
                   </div>
                   </div>
                 </Container>
                 {/* <Route path="/Registration" exact component={Registration} />
                 <Route path="/HomeUser" exact component={HomeUser} />
                 <Route path="/HomeAdmin" exact component={HomeAdmin} /> */}
                 {/* <Route path="/" exact component={Login_Project} /> */}
                 </div>  
              
    );
}
}

export default ModalLogin