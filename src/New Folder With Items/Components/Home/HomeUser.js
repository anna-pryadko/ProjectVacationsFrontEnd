import React, { Component } from 'react';
import { Route, Link, Switch, Redirect} from 'react-router-dom';
import axios from "axios";
import { MDBFormInline, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

// import './Home.css';

import Login from '../Login/Login.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Card from '../Card/Card';

class HomeUser extends Component {

    state = {

      currentUserHome: {},
      userNameHome:"",  

      currentUserVacations: [],
	  collapse: false,
	  isWideEnough: false,
    
	};
	
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 	  collapse: false,
	// 	  isWideEnough: false,
	// 	  allVacation:[],
	// 	};
	// 	this.onClick = this.onClick.bind(this);
		
	//   }
	
	  onClick() {
		this.setState({
		  collapse: !this.state.collapse,
		});
	  }
	
	  //Get all vacations

    componentDidMount=()=>{
        let currUser = JSON.parse(localStorage.currentUser);
        this.setState({ currentUserHome: currUser });
        this.setState({ userNameHome: currUser.data[0].first_name });

		console.log('currentUser: ',currUser);
		let currentUserId=currUser.data[0].id;
		console.log('currentUserId: ',currentUserId);
        var self=this;
        axios.get(`http://localhost:5000/getAllVacation?currentUserId=${currentUserId}`)
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
            if (item.status!==null) {
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
            if (item.status==null) {
            printArray.push(<Card key={item.id} data={item}/>)
            
            }
		}
        console.log('printArray: ',printArray);
        return printArray;
      }
   
      LinkLogOut= () => {
        localStorage.removeItem('currentUser');
        var self=this;
        axios.get(`http://localhost:5000/Logout`,{withCredentials:true})
        .then(function(response){
          
          console.log(response.data);
           
        // self.setState({ isLogin: response.data });
        })
        .catch(function(error){
           console.log(error);
        });
        }

      

  render() {
    return (
	
		<div>
		  <header>
		   
			  <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
				<MDBNavbarBrand href="/">
				  <strong>Menu</strong>
				</MDBNavbarBrand>
				{!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
				<MDBCollapse isOpen={this.state.collapse} navbar>
				  <MDBNavbarNav left>
					<MDBNavItem active>
					  <MDBNavLink to="#">Home</MDBNavLink>
					</MDBNavItem>
					<MDBNavItem>
					  <MDBNavLink to="#">About</MDBNavLink>
					</MDBNavItem>
					<MDBNavItem>
					  <MDBNavLink to="#">Profile</MDBNavLink>
					</MDBNavItem>
				  </MDBNavbarNav>
				  <MDBNavbarNav right>
			  <MDBNavItem>
				<MDBFormInline waves>
				  <div className="md-form my-0">
					<input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
				  </div>
				</MDBFormInline>
			  </MDBNavItem>
			</MDBNavbarNav>
				</MDBCollapse>
			  </MDBNavbar>
			
  
			<MDBView src="https://mdbootstrap.com/img/Photos/Others/img%20(40).jpg" fixed="top">
			  <MDBMask overlay="purple-light" className="flex-center flex-column text-white text-center">
				<h2>OUR VACATIONS</h2>

                <h3>Yours favourite vacations:</h3>
				
					<div className="row">
						{this.printCardsfavourite()}
					</div>

                <h3>Others vacations:</h3>
				
                    <div className="row">
                        {this.printCards()}
                    </div>    
		       
				{/* <Router> */}
				{/* <Switch> */}
				  {/* <Route path="/" exact component={Jumbotron} />
				  <Route path="/Home" exact component={Home} />
				  <Route path="/Login" exact component={ModalLogin} />
				  <Route path="/Registration" exact component={Registration} /> */}
				  
				  {/* <Route path="/HomeAdmin" exact component={HomeAdmin} />
				  <Route path="/HomeUser" exact component={HomeUser} /> */}
				{/* </Switch> */}
				{/* </Router> */}
				{/* <h5>It will always stay visible on the top, even when you scroll down</h5>
				<p>Navbar's background will switch from transparent to solid color while scrolling down</p><br />
				<p>Full page intro with background image will be always displayed in full screen mode, regardless of device </p> */}
			  </MDBMask>
			</MDBView>
			
		  </header>
  
		  {/* <main>
			<MDBContainer className="text-center my-5">
			</MDBContainer>
		  </main> */}

		  <div className="row">
           <a type="button" onClick={() =>this.LinkLogOut()}><Link to="/Logout">LogOut</Link></a>
           <Route path="/Login" exact component={Login} />
           </div>
   
		</div>
  
    );
  }
}
    
export default HomeUser;
