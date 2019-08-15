import React, { Component }  from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEdit} from '@fortawesome/free-solid-svg-icons'
import { MDBIcon } from "mdbreact";
//import $ from "jquery";

import './ButtonHeart.css';
// import ToggleButton from 'react-bootstrap/ToggleButton'
// import {Card,Button} from 'react-bootstrap';
import axios from "axios";

class ButtonHeart extends Component {
    
state={
    addClass:"",
    // addClass: false
    
} 

componentDidMount=()=>{
     if (this.props.checkOn!==null) {
       this.setState({addClass:true}) 
    }
}

handleClick=()=>{

    this.setState({addClass: !this.state.addClass});
    //this.changFavourite();
}

changFavourite = () => {
   // event.preventDefault();
    
    let status="";
    
    // add or del favourite Vacation
    if (this.state.addClass==false) {
        status=0;
    } else status=1;
    let id=this.props.id; 
    let user_id=this.props.user_id; 
    console.log('changFavourite',status,id,user_id) 

    axios.get(`http://localhost:5000/updateFavouriteVacations?status=${status}&id=${id}&user_id=${user_id}`)
    .then(function(response){
      
      console.log(response.data);
    
    })
    .catch(function(error){
       console.log(error);
    });
 
}


render() {
 
    // if (this.props.checkOn!==null) {
    //    this.setState({addClass:true}) 
    // }

    let boxClass = ["fas fa-heart"];
    let boxClass2 = [""];
    if(this.state.addClass) {
      boxClass.push('press');
      boxClass2.push('press');
 }
    
    console.log("props : " , this.props)
    
    return (
     <div>
        <i className={boxClass.join(' ')} onClick={() =>this.handleClick()}></i>
        <span className={boxClass2.join(' ')}>liked!</span>
     </div>
            ); 
}
}

export default ButtonHeart