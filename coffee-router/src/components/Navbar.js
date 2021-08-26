import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <h1> The Roasted Roast!</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">about</Link></li>
                <li><Link to="/coffeelist">Coffeelist</Link></li>
                
            </ul>
        </nav>
    )
}

export default Navbar
