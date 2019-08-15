import React, { Component }  from 'react';
import {Redirect} from 'react-router-dom';

import './ButtonHeart.css';

import axios from "axios";

class ButtonHeart extends Component {
    
state={
    addClass:"",
    checkChange:0,
    // addClass: false
    
} 

componentDidMount=()=>{
     if (this.props.checkOn!==0) {
       this.setState({addClass:true}) 
    }
}

handleClick=()=>{

    this.setState({addClass: !this.state.addClass});
    this.changFavourite();
    window.location.reload();
    //this.setState({checkChange:1}) 
}

changFavourite = () => {
   // event.preventDefault();
    
    let updateFav="";
    
    // add or del favourite Vacation
    if (this.state.addClass==false) {
        updateFav=1;
    } else updateFav=0;
    let id=this.props.id; 
    let user_id=this.props.user_id; 
    console.log('changFavourite',updateFav,id,user_id) 

    axios.get(`http://localhost:5000/updateFavouriteVacations?updateFav=${updateFav}&id=${id}&user_id=${user_id}`)
    .then(function(response){
      
      console.log(response.data);
    
    })
    .catch(function(error){
       console.log(error);
    });
 
}


render() {
 
    if (this.state.checkChange==1) {
        return  <Redirect to="/HomeUser"/>
    }

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