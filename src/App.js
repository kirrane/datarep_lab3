import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
//import bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' ;
//create a class instead of  function so you can have multiple classes
class App extends Component {
  //render so class will run
  render(){
  return (
    <Router>
    <div className="App">

<Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/read">Read</Nav.Link>
      <Nav.Link href="/create">Create</Nav.Link>
    </Nav>
  </Navbar>

  <br />
  <Switch>
    <Route path='/' component={Content} exact/>
    <Route path='/create' component={Header} exact/>
    <Route path='/read' component={Footer} exact/>
  </Switch>
    </div>
    </Router>
  );
}
}// end render

export default App;
