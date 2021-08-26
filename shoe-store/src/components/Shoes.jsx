import React, { Fragment } from 'react'
import shoe1 from './images/shoe1.jpeg';
import shoe2 from './images/shoe2.jpeg';
import shoe3 from './images/shoe3.jpeg';
import shoe4 from './images/shoe4.jpeg';


function Shoes() {
    return (
        <Fragment>
        <div>
            <h1>Take a look at our selection</h1>
        </div>

        <div className="products">
            <h1>Shoe 1</h1>
            <img src={shoe1} alt="shoe1"></img>
            <h1>Shoe 2</h1>
            <img src={shoe2} alt="shoe2"></img>
            <h1>Shoe 3</h1>
            <img src={shoe3} alt="shoe3"></img>
            <h1>Shoe 4</h1>
            <img src={shoe4} alt="shoe4"></img>
        
            
        </div>   
        </Fragment>
        )
}

export default Shoes
