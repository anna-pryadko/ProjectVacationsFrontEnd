import React, { Component } from 'react';
import axios from "axios";
//import Registration from './MyReg';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody,MDBModalFooter } from 'mdbreact';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link, Switch,} from 'react-router-dom';


// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';

class Login extends Component {
  state = {
    username:"",
    password:"",
  
    isLoginSuccess:"",

    errorName:"",
    errorPassword:"",
  };

  _isFormValid() {
    return this._isNameValid(this.state.username) && this._isPassValid(this.state.password)
  }

  _isNameValid(username) {
    let isValid=true;
    let errorName='';

    if (username==='') {
      errorName='Name is empty!';
      isValid=false;
      this.setState({errorName:errorName});
      return isValid;
    } 

    if (username.length < 3) {
      errorName='Name must have 3 symbols minimum!';
      isValid=false;
      this.setState({errorName:errorName});
      return isValid;
    } 
  }

  _isPassValid(password) {
    let isValid=true;
    let errorPassword='';

    if (password==='') {
      errorPassword='Password is empty!';
      isValid=false;
      this.setState({errorName:errorPassword});
      return isValid;
    } 
  }

  // changeName(username) {
  //   this.setState({username:username});
  //   console.log(this.state.username)
  // }

  // changePassword(password) {
  //   this.setState({password:password});
  //   console.log(this.state.password)
  // }
  

  // handleClick(event){
  //   var apiBaseUrl = "http://localhost:4000/api/";
  //   var self = this;
  //   var payload={
  //   "email":this.state.username,
  //   "password":this.state.password
  //   }
  //   axios.post(apiBaseUrl+'login', payload)
  //   .then(function (response) {
  //   console.log(response);
  //   if(response.data.code == 200){
  //   console.log("Login successfull");
  //   var uploadScreen=[];
  //   uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
  //   self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
  //   }
  //   else if(response.data.code == 204){
  //   console.log("Username password do not match");
  //   alert("username password do not match")
  //   }
  //   else{
  //   console.log("Username does not exists");
  //   alert("Username does not exist");
  //   }
  //   })
  //   .catch(function (error) {
  //   console.log(error);
  //   });
  //   }
  
  sendLogin= (event) => {
    event.preventDefault();
    console.log(this.state.username,this.state.password)
    // if (!this._isFormValid()) return;

    // console.log("handleClick");
    // let username=this.state.username;
    // let password=this.state.password;
       
    // var self=this;
    // axios.get(`http://localhost:4000/login?name=${username}&password=${password}`)
    // .then(function(response){
      
    //   console.log("Login: ",response.data);
      
    //  self.setState({ isLoginSuccess: response.data });

    //  console.log("isLoginSuccess:", this.state.isLoginSuccess);
    // })
    // .catch(function(error){
    //    console.log(error);
    // });
    }

    

    render() {
        return (
          <BrowserRouter>
          <div>
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                  <MDBCard>
                    <MDBCardBody>
                      <form>
                        <p className="h4 text-center py-4">Login</p>
                        <div className="grey-text">
                          <MDBInput
                            label="Your name"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            onChange = {(event,target) => this.setState({username:event.target.value})}
                            // onChange={this.changeName}
                            value={this.state.username}
                          />
                          <MDBInput
                            label="Your password"
                            icon="lock"
                            group
                            type="password"
                            validate
                            onChange = {(event,target) => this.setState({password:event.target.value})}
                            // onChange={this.changePassword}
                            value={this.state.password}
                          />
                        </div>
                        <div className="text-center py-4 mt-3">
                          <MDBBtn color="cyan" type="submit" onClick={this.sendLogin}>
                            LOGIN
                          </MDBBtn>
                        </div>
                      </form>
                      <MDBModalFooter>
                <div className="font-weight-light">
                  {/* <p>Not a member? <Link to="/registration">Sign Up</Link></p> */}
                  {/* <p>Forgot Password?</p> */}
                </div>
               
              </MDBModalFooter>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            
            </MDBContainer>
            {/* <Route path="/registration" exact component={Registration} /> */}
            </div>
            </BrowserRouter>
          );
        };
      }   
  export default Login;
  