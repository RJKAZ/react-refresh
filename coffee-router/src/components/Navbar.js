import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav>
      <h1> The Roasted Roast!</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>about</Link>
        </li>
        <li>
          <Link to='/coffeelist'>Coffeelist</Link>
        </li>
        <li>
          You will have <span>{props.numberOfCups}</span> Cups of Coffee Today
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
