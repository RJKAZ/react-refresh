import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Coffeelist from './components/Coffeelist';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <Fragment>
      <BrowserRouter>
 
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/coffeelist" component={Coffeelist}/>
        </Switch>
        

      </BrowserRouter>
    </Fragment>
    
  );
}

export default App;
