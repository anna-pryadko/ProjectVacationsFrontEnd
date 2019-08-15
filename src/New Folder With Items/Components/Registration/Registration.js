import React, { Component } from 'react';
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';


// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';

class Registration extends Component {
  state = {
    username:"",
    password:"",
  
    // checkCookie:"",
    isLogin:"",
  };

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
  
  handleClick= (event) => {
    console.log("handleClick");
    let username=this.state.username;
    let password=this.state.password;
       
    var self=this;
    axios.get(`http://localhost:4000/login?name=${username}&password=${password}`)
    .then(function(response){
      
      console.log("Login: ",response.data);
      
     self.setState({ isLogin: response.data });

     console.log("isLogin:", this.state.isLogin);
    })
    .catch(function(error){
       console.log(error);
    });
    }
    
    // handleChange=(event,type)=> {
    //   if (type === 0){
    //     this.setState({name: event.target.value});
    //     console.log("change",this.state.name)
    //   }
    //   if (type === 1) {
    //     this.setState({password: event.target.value});
    //     console.log("change",this.state.password)
    //   }
      
    // }

    render() {
        return (
        
            <MDBContainer>
              <MDBRow>
                <MDBCol md="6">
                  <MDBCard>
                    <MDBCardBody>
                      <form>
                        <p className="h4 text-center py-4">Sign up</p>
                        <div className="grey-text">
                          <MDBInput
                            label="Your name"
                            icon="user"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                          />
                          <MDBInput
                            label="Your email"
                            icon="envelope"
                            group
                            type="email"
                            validate
                            error="wrong"
                            success="right"
                          />
                          <MDBInput
                            label="Confirm your email"
                            icon="exclamation-triangle"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                          />
                          <MDBInput
                            label="Your password"
                            icon="lock"
                            group
                            type="password"
                            validate
                          />
                        </div>
                        <div className="text-center py-4 mt-3">
                          <MDBBtn color="cyan" type="submit">
                            Register
                          </MDBBtn>
                        </div>
                      </form>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          );
        };
      }   
  export default Registration;
  