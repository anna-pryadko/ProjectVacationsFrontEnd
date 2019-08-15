import React, { Component } from 'react';

import axios from "axios";

import './Home.css';


import Card from '../Card/Card';
import Menu from '../Menu/MenuUser';

class HomeUser extends Component {

    state = {

    currentUserName:"",
    userId:"",

    currentUserVacations: [],
	};
	
	
//Get all vacations

    componentDidMount=()=>{

    let currUser = JSON.parse(localStorage.currentUserName); //get info about current admim from LS
    this.setState({currentUserName:currUser});

    let currIdUser = JSON.parse(localStorage.currentUserId); //get info about current admim from LS
		this.setState({userId:currIdUser});
    	
        var self=this;
        axios.get(`http://localhost:5000/getAllVacation?currentUserId=${currIdUser}`)
        .then(function(response){
		 
		// console.log(this.state.allVacations);
	
         console.log(response.data);
         
		 self.setState({ currentUserVacations: response.data });
		// console.log(this.state.allVacations);

        })
        .catch(function(error){
           console.log(error);
        });
      } 
      
      printCardsfavourite=()=>{
        let printArrayfavourite  = [];
		console.log(this.state.currentUserVacations);
        for(let item of this.state.currentUserVacations)
        {
			      item.start_date=item.start_date.substring(0,10) //this function cut the date to normal without zone time
            item.end_date=item.end_date.substring(0,10)
            if (item.status==1) {
            printArrayfavourite.push(<Card key={item.id} data={item}/>)
            
            }
		}
        console.log('printArrayfavourite: ',printArrayfavourite);
        return printArrayfavourite;
      }

      printCards=()=>{
        let printArray  = [];
		console.log(this.state.currentUserVacations);
        for(let item of this.state.currentUserVacations)
        {
            if (item.status==0) {
            printArray.push(<Card key={item.id} data={item}/>)
            
            }
		}
        console.log('printArray: ',printArray);
        return printArray;
      }
     

  render() {
    return (
	
		<div>
      	
	        	<Menu name={this.state.currentUserName}></Menu>
       
		 
        <div className="container">
				<h1>OUR VACATIONS</h1>

                <h3>Yours favourite vacations:</h3>
				
					<div className="row boxCardsUser">
						{this.printCardsfavourite()}
					</div>

          <h3>Others vacations:</h3>
				
                    <div className="row boxCardsUser">
                        {this.printCards()}
                    </div>  
          </div>  
		
		</div>
  
    );
  }
}
    
export default HomeUser;
