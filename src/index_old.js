import React from 'react';
import ReactDOM from 'react-dom';
//import {Provider} from 'react-redux';
//import {createStore, applyMiddleware} from 'redux';
//import {composeWithDevTools} from 'redux-devtools-extension';
//import thunk from 'redux-thunk';
//import {Router, Route} from 'react-router';

import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//import {createBrowserHistory} from 'history/createBrowserHistory';

import App from './App';
import * as serviceWorker from './serviceWorker';
// var injectTapEventPlugin = require("react-tap-event-plugin");
// injectTapEventPlugin();

//import reducer from './reducers';

//import Home from './Components/Home/Home';
//import Main from './Components/Main/Main.js';
//import Login from './Components/Login/Login.js';
//import Registration from './Components/Registration/Registration.js';

// function getVacations (state=[],action) {
//     if (action.type="GET ALL VACATIONS") {
//         return [
//             ...state,
//             action.allVacations
//         ]
//     }
//     return state
// }

//const history = createBrowserHistory();

//const store=createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

//const history=syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
// {/* <Provider store={store}>
//     <Router history={history}>
//         <Route path="/" component={App}/>
//         <Route path="/home" component={Home}/>
//         <Route path="/login" component={Login}/>
//         {/* <Route path="/registration" component={Registration}/> */}
//     </Router>
//   </Provider>, */}
<App/>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
