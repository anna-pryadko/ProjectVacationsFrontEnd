import React, { Component }  from 'react';
import Modal from 'react-awesome-modal';
import {Form} from 'react-bootstrap';

import './ButtonUpd.css';

import axios from "axios";

class ButtonUpd extends Component {

  constructor(props) {
    super(props);
    this.state = {
        visible : false,

        image:"",
        nameVac:"",
        location:"",
        dateFrom:"",
        dateTo:"",
        price:""
    }
}

openModal() {
    this.setState({
        visible : true,
        image:this.props.image,
        nameVac:this.props.nameVac,
        location:this.props.location,
        dateFrom:this.props.dateFrom,
        dateTo:this.props.dateTo,
        price:this.props.price,
    });
}

closeModal() {
    this.setState({
        visible : false
    });
}


handleClick = (idVac) => {
   // event.preventDefault();
    let image=this.state.image;
    let nameVac=this.state.nameVac; 
    let location=this.state.location;
    let dateFrom=this.state.dateFrom; 
    let dateTo=this.state.dateTo;
    let price=this.state.price;

    //console.log("props : " , this.props)
    console.log('idVac',idVac) 
    console.log('nameVac',nameVac) 
    this.closeModal();

    axios.get(`http://localhost:5000/updateVacation?idVac=${idVac}&image=${image}&nameVac=${nameVac}&location=${location}&dateFrom=${dateFrom}&dateTo=${dateTo}&price=${price}`)
    .then(function(response){
      
      console.log(response.data);
    
    })
    .catch(function(error){
       console.log(error);
    });
 
}


render() {
  
    console.log("props : " , this.props)
    
    return (
     <div>
      
       <i className="far fa-edit" onClick={() => this.openModal()}></i>

       <section>
               
                <Modal 
                    visible={this.state.visible}
                    width="420"
                    height="670"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="container">
                    <div className="row modalHeder">  
                    <div className="col-10">
                      <h3>Edit vacation</h3>
                    </div>  
                    <div className="col-2"> 
                      <i className="fas fa-times" onClick={() => this.closeModal()}></i>
                    </div>
                    </div>
                      <hr></hr>
<Form>
 <Form.Group controlId="image" className="colInp">
    <Form.Label>Image</Form.Label>
    <Form.Control type="text" value={this.props.image} onChange = {(event,target) => this.setState({image:event.target.value})}/>
  </Form.Group>

  <Form.Group controlId="nameVac" className="colInp">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" value={this.state.nameVac} onChange = {(event,target) => this.setState({nameVac:event.target.value})}/>  
  </Form.Group>

  <Form.Group controlId="location" className="colInp">
    <Form.Label>Location</Form.Label>
    <Form.Control type="text" value={this.props.location} onChange = {(event,target) => this.setState({location:event.target.value})}/>  
  </Form.Group>

  <Form.Group controlId="StartDate" className="colInp">
    <Form.Label>Start Date</Form.Label>
    <Form.Control type="date" value={this.props.dateFrom} onChange = {(event,target) => this.setState({dateFrom:event.target.value})}/>  
  </Form.Group>

  <Form.Group controlId="EndDate" className="colInp">
    <Form.Label>End Date</Form.Label>
    <Form.Control type="date" value={this.props.dateTo} onChange = {(event,target) => this.setState({dateTo:event.target.value})}/>  
  </Form.Group>

  <Form.Group controlId="price" className="colInp">
    <Form.Label>Price</Form.Label>
    <Form.Control type="number" value={this.props.price} onChange = {(event,target) => this.setState({comment:event.target.value})}/>
  </Form.Group>
  <hr></hr>
                      <div className="row">
  <div className="col-6">
  <a className="button btn but" onClick={() =>this.handleClick(this.props.idVac)} href="/HomeAdmin">Save</a>
  </div>
  <div className="col-6">
  <a className="button btn but" onClick={() => this.closeModal()} href="/HomeAdmin">Cancel</a>
  </div>
</div>
 
</Form>
                     
                     
                    </div>
                </Modal>
            </section>

    </div>
     
    
            ); 
}
}

export default ButtonUpd