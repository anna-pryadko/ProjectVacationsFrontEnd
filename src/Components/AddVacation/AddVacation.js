import React from 'react';

import { Route, Link, Switch,Redirect} from 'react-router-dom';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import {Container, Col, Form,FormGroup, Label, Input,Button,} from 'reactstrap';
import axios from "axios";

// import { Button, Form} from 'react-bootstrap';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import './AddVacation.css';

class AddModal extends React.Component {
  
  state={

  
    image:"",
    nameVac:"",
    location:"",
    dateFrom:"",
    dateTo:"",
    price:""
  
    
   } 
   
   saveVacation=()=>{ 
          
    let image=this.state.image;
    let nameVac=this.state.nameVac; 
    let location=this.state.location;
    let dateFrom=this.state.dateFrom; 
    let dateTo=this.state.dateTo;
    let price=this.state.price;

    //console.log(password,userName);

    var self=this;
    axios.get(`http://localhost:5000/addVacation?image=${image}&nameVac=${nameVac}&location=${location}&dateFrom=${dateFrom}&dateTo=${dateTo}&price=${price}`,{withCredentials:true})
    //axios.get(`http://localhost:5000/addVacation?vacation=${vacation}`,{withCredentials:true})
    .then(function(response){
      
    console.log('response',response.data);

    //self.setState({currentUser: response.data}); 

    //self.setUserAccess();
    
     
    })
    .catch(function(error){
      console.log(error);
    });
   
} 



  render() {

    console.log()
   
    return (

<div className="Main">                  
              <Container className="App">
                 <div className="row">
                 <div className="addBox col-md-4">
                   <h2 className="mb-2">ADD NEW VACATION</h2>
                   <AvForm className="form">
                     <Col  className="addInput">
                       <FormGroup>
                       <Label className="lableBox" for="image">Enter URL image</Label>
                         <AvField
                         
                           type="text"
                           name="image"
                           id="image"
                           placeholder="Enter URL image"
                           onChange = {(event,target) => this.setState({image:event.target.value})}
                           value={this.state.image}
                           errorMessage="* invalid name" validate={{
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
                         <Label className="lableBox" for="nameVac">Name</Label>
                         <AvField
                           type="text"
                           name="nameVac"
                           id="nameVac"
                           placeholder="Enter name vacation"
                           onChange = {(event,target) => this.setState({nameVac:event.target.value})}
                           value={this.state.nameVac}
                           errorMessage="Invalid name vacation" validate={{
                            required: {value: true},
                            pattern: {value: '^[A-Za-z0-9 ]+$'},
                            minLength: {value: 3},
                            // maxLength: {value: 16}
          }} />
                        
                       </FormGroup>
                     </Col>

                     <Col>
                       <FormGroup>
                         <Label className="lableBox" for="location">Location</Label>
                         <AvField
                           type="text"
                           name="location"
                           id="location"
                           placeholder="Enter location"
                           onChange = {(event,target) => this.setState({location:event.target.value})}
                           value={this.state.location}
                           errorMessage="Invalid location" validate={{
                            required: {value: true},
                            pattern: {value: '^[A-Za-z0-9 ]+$'},
                            minLength: {value: 3}
                        //    maxLength: {value: 16}
          }} />
                        
                       </FormGroup>
                     </Col>

                     <Col>
                       <FormGroup>
                         <Label className="lableBox" for="dateFrom">Start date</Label>
                         <AvField
                           type="date"
                           name="dateFrom"
                           id="dateFrom"
                           placeholder="Enter start date"
                           onChange = {(event,target) => this.setState({dateFrom:event.target.value})}
                           value={this.state.dateFrom}
                           errorMessage="Invalid date" validate={{
                            required: {value: true},
                           // pattern: {value: '^[0-9]+$'},
                           // minLength: {value: 3}
                        //    maxLength: {value: 16}
          }}
                           />
                        
                       </FormGroup>
                     </Col>

                     <Col>
                       <FormGroup>
                         <Label className="lableBox" for="dateTo">End date</Label>
                         <AvField
                           type="date"
                           name="dateTo"
                           id="dateTo"
                           placeholder="Enter end date"
                           onChange = {(event,target) => this.setState({dateTo:event.target.value})}
                           value={this.state.dateTo}
                           errorMessage="Invalid date" validate={{
                            required: {value: true},
                           // pattern: {value: '^[0-9]+$'},
                           // minLength: {value: 3}
                        //    maxLength: {value: 16}
          }}
                           />
                        
                       </FormGroup>
                     </Col>

                     <Col>
                       <FormGroup>
                         <Label className="lableBox" for="price">Price</Label>
                         <AvField
                           type="number"
                           name="price"
                           id="price"
                           placeholder="Enter price"
                           onChange = {(event,target) => this.setState({price:event.target.value})}
                           value={this.state.price}
                           errorMessage="Invalid price" validate={{
                            required: {value: true},
                            pattern: {value: '^[0-9]+$'},
                           // minLength: {value: 3}
                        //    maxLength: {value: 16}
          }} />
                        
                       </FormGroup>
                     </Col>

                     <div className="row">
  <div className="col-6">
  <button type="button" className="btn but" onClick={this.saveVacation} href="/HomeAdmin">Save</button>
  </div>
  <div className="col-6">
  <a className="button btn but" href="/HomeAdmin">Cancel</a>
  </div>
</div>
                   </AvForm>
                   </div>
                   </div>

                 </Container>
                 
                 </div>  
 
    );
  }
}

export default AddModal;