import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Shoes from './components/Shoes';
import Cart from './components/Cart';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <BrowserRouter>

      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/shoes" component={Shoes}/>
        <Route path="/cart" component={Cart}/>
      </Switch>

      </BrowserRouter>
    </Fragment>
  );
}

export default App;
