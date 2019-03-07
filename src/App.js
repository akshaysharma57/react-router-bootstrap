import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';


import logo from './logo.svg';
import './App.css';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Navigator from './Navigator';

class App extends Component {
  render() {
    return (
      <div className="App">
    <BrowserRouter>
    <div>
    <Navigator />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" render={() => <h1>Contact address</h1>} /> <Route render={() => <h1>Page not found</h1>} />
       </Switch>
    </div>
    </BrowserRouter>
   </div>
    );
  }
}

export default App;
