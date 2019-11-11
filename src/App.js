import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './app/Login';
import Signup from './app/Signup';
import Chat from './app/Chat';
import Home from './app/Home';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
 return (
   <div className="App">
     <Router>
         <Route exact path="/" component={Home} />
       <Route exact path="/Signup" component={Signup} />
       <Route exact path="/Login" component={Login} />
       <Route exact path="/Chat"  component={Chat} />
     </Router>
     </div>
 );
}
export default App;