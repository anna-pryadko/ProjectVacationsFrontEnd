import React, { Component }  from 'react';
import Modal from 'react-awesome-modal';

import './ButtonDel.css';

import axios from "axios";

class ButtonDel extends Component {

  constructor(props) {
    super(props);
    this.state = {
        visible : false
    }
}

openModal() {
    this.setState({
        visible : true
    });
}

closeModal() {
    this.setState({
        visible : false
    });
}


handleClick = (idVac) => {
   // event.preventDefault();

    console.log("props : " , this.props)
    console.log('idVac',idVac) 
    this.closeModal();

    axios.get(`http://localhost:5000/deleteVacation?idVac=${idVac}`)
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
      
       <i className="far fa-trash-alt" onClick={() => this.openModal()}></i>

       <section>
               
                <Modal 
                    visible={this.state.visible}
                    width="420"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div className="container">
                    <div className="row modalHeder">  
                    <div className="col-10">
                      <h3>Delete vacation</h3>
                    </div>  
                    <div className="col-2"> 
                      <i className="fas fa-times" onClick={() => this.closeModal()}></i>
                    </div>
                    </div>
                      <hr></hr>
                      <p>Are you sure you want to delete vacation </p>
                      <p> to {this.props.location} on dates: </p>
                      <p>from {this.props.dateFrom} to {this.props.dateTo}?</p>
                      <hr></hr>
                      <div className="row">
  <div className="col-6">
  <a className="button btn but" onClick={() =>this.handleClick(this.props.idVac)} href="/HomeAdmin">Delete</a>
  </div>
  <div className="col-6">
  <a className="button btn but" onClick={() => this.closeModal()} href="/HomeAdmin">Cancel</a>
  </div>
</div>
                     
                    </div>
                </Modal>
            </section>

    </div>
     
    
            ); 
}
}

export default ButtonDel