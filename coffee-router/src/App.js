import React, { Fragment, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Coffeelist from './components/Coffeelist';
import Home from './components/Home';
import About from './components/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [cups, coffeeCups] = useState(0);

  const addCoffeeToCup = () => {
    coffeeCups(cups + 1);
  };

  return (
    <Fragment>
      <BrowserRouter>
        <Navbar numberOfCups={cups} />
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Home coffeeFunc={addCoffeeToCup} />}
          />
          <Route path='/about' component={About} />
          <Route path='/coffeelist' component={Coffeelist} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
