import React, { Component }  from 'react';
// import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import { faEdit} from '@fortawesome/free-solid-svg-icons'
//import { MDBIcon,MDBBtn, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip } from "mdbreact";

import './CardAdmin.css';
// import ToggleButton from 'react-bootstrap/ToggleButton'
// import {Card,Button} from 'react-bootstrap';
//import axios from "axios";
import ButtonDel from '../ButtonDel/ButtonDel';
import ButtonUpd from '../ButtonUpd/ButtonUpd';

class CardAdmin extends Component {
    
state={

    //checkOn:"" , 
   // idVacAdm:"",
   // user_id:""
}    



componentDidMount(){
    // let currUserCard = JSON.parse(localStorage.currentUser);
    // let currentUserIdCard=currUserCard.data[0].id;
    // this.setState({ user_id : currentUserIdCard })

    //this.setState({ checkOn : this.props.user_id }) //user_id or null
    //this.setState({ idVacAdm : this.props.id })
    
}

render() {
    
    console.log("props : " , this.props)
    
    return (
   
        
        <div className='card' style={{width:18+'rem'}}>
        <img className='card-img-top' src={this.props.data.image} alt='Card image cap'></img>
        <div className='card-body'>
        <h5 className='card-title'>{this.props.data.title}</h5>
        <p className='card-text'>Location: {this.props.data.location}</p>
        <p className='card-text'>Price: {this.props.data.price}$</p>
        <p className='card-text'>From: {this.props.data.start_date} to: {this.props.data.start_date}</p> 
        {/* <p className='card-text'>to: {this.props.data.start_date}</p>   */}
       
        <div className="row">
           <div className="col-md-1 offset-8">
             <ButtonUpd idVac={this.props.data.id} image={this.props.data.image} nameVac={this.props.data.title} price={this.props.data.price} location={this.props.data.location} dateFrom={this.props.data.start_date} dateTo={this.props.data.end_date} onClick={() =>this.handleClick()}/>
           </div>
           <div className="col-md-1 offset-1">
             <ButtonDel idVac={this.props.data.id} location={this.props.data.location} dateFrom={this.props.data.start_date} dateTo={this.props.data.end_date} onClick={() =>this.handleClick()}/>
            </div>
        </div>
        </div>
        </div> 
    ); 
}
}

export default CardAdmin