import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Route, Link, Switch,Redirect} from 'react-router-dom';

import './App.css';

import Main from './Components/Main/Main.js';
import HomeUser from './Components/Home/HomeUser.js';
import HomeAdmin from './Components/Home/HomeAdmin.js';
import Charts from './Components/Charts/Charts';
//import Login from './Components/Login/Login';
import ModalLogin from './Components/ModalLogin/ModalLogin';
import Registration from './Components/Registration/Registration.js';
import AddModal from './Components/AddVacation/AddVacation';

class App  extends Component {
  render() {
    
    return (
      <BrowserRouter>
       
        <Switch>
                <Route path="/" exact component={Main} />
                {/* <Route path="/Jumbotron" exact component={Jumbotron} /> */}
                <Route path="/HomeUser" exact component={HomeUser} />
                <Route path="/HomeAdmin" exact component={HomeAdmin} />
                <Route path="/Charts" exact component={Charts} />
                <Route path="/Login" exact component={ModalLogin} />
                <Route path="/Registration" exact component={Registration} />
                <Route path="/AddVacation" exact component={AddModal} />
        </Switch>
       
      </BrowserRouter>
      
    )
  }
}

 export default App;
