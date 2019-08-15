import React, { Component } from 'react';
import './App.css';
//import Card from './Components/MyCard';
import Login from './Components/MyLogin';
import Home from './Components/MyHome';
//import HeaderComp from './Components/header';
//import Buttons from './Components/Buttons'


import { BrowserRouter } from 'react-router-dom'
import { Route, Link, Switch,} from 'react-router-dom';

class App extends Component {
  state = {
    diameter:"",
    slices:"",
    mail:"",
    id:"",
    allCategory: [],
    allSubCategory: [],
    allProducts: [],
    products:"",
    allVacation:[]
  
  };

render() {

  const loggedIn = this.state.checkCookie === '1';
  console.log("LOGGWD", loggedIn)

  return (
    <BrowserRouter>
    <div className="container">
    <div className="row">
    
   
    <Switch>
      <Route path="/home" exact component={Home}/>
        <Route exact path="/" render={() => (
          loggedIn ? (
          <Home/>
        ) : (
          <Login/>
        )
      )}/>
    </Switch>
    
    </div>
    </div>
    </BrowserRouter>
  
  );
}
}
export default App;
