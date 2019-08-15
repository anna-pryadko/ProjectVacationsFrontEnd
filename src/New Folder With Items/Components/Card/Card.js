import React, { Component }  from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter,  MDBTooltip } from "mdbreact";

import ButtonHeard from '../ButtonHeart/ButtonHeart';
import './Card.css';
// import ToggleButton from 'react-bootstrap/ToggleButton'
// import {Card,Button} from 'react-bootstrap';
import axios from "axios";

class Card extends Component {
    
state={

    //checkOn:"" , 
    id:"",
    user_id:""
}    


componentDidMount(){
    let currUserCard = JSON.parse(localStorage.currentUser);
    let currentUserIdCard=currUserCard.data[0].id;
    this.setState({ user_id : currentUserIdCard })

    //this.setState({ checkOn : this.props.user_id }) //user_id or null
    this.setState({ id : this.props.id })
    
}

// checkFavourite = () => {
//     console.log('this.props.user_id',this.props.user_id)
//     if (this.state.user_id!== null) {
//         return <MDBTooltip
//         placement="top"
//         tag="a"
//         component="i"
//         componentClass="fas fa-heart grey-text ml-3"
//         tooltipContent="Add to watchlist"
//         onClick={this.changFavourite}
//         checkOn="false"/>
        
//     } else {
//         return <MDBTooltip
//         placement="top"
//         tag="a"
//         component="i"
//         componentClass="fa fa-heart grey-text ml-3"
//         tooltipContent="Add to watchlist"
//         onClick={this.changFavourite}
//         checkOn="true"/>
//     }
// }


//changFavourite = (event) => {
    // event.preventDefault();
    // event.target.value='off';
   // console.log(event.target); 
//     console.log(event.target.checkOn); // if true or false 
//     this.setState({ checkOn : event.target.checkOn })
//     console.log("this.state.checkOn: ",this.state.checkOn); 
//     // this.props.checkOn = !this.props.checkOn
//     //this.setState({ checkOn : event.target.checked })
//     var status="";
    
//     // add or del favourite Vacation
//     if (this.state.checkOn===1) {
//         status=0;
//     } else status=1;
//     var id=this.state.id; 
//     var user_id=this.state.user_id; 
//     axios.get(`http://localhost:5000/updateFavouriteVacations?status=${status}&id=${id}&user_id=${user_id}`)
//     .then(function(response){
      
//       console.log(response.data);
    
//     })
//     .catch(function(error){
//        console.log(error);
//     });
 
// }
//}

render() {
    

    console.log("props : " , this.props)
    

    return (
      <div className='card' style={{width:18+'rem'}}>
      <img className='card-img-top' src={this.props.data.image} alt='Card image cap'></img>
      <div className='card-body'>
      <h5 className='card-title'>{this.props.data.title}</h5>
      <p className='card-text'>Price: {this.props.data.price}$</p>
      <div className="row">
      <p>From: {this.props.data.start_date}</p>
      <p>   to: {this.props.data.end_date}</p>
      </div>
      <ButtonHeard id={this.props.data.id} user_id={this.state.user_id} checkOn={this.props.data.status}/>
      
      {/* <label htmlFor={this.props.id} className='switch'>
      {this.checkToggle()}
      <span className='slider round'></span>
      </label> */}
      </div>
      </div> 
    ); 
}
}

export default Card