import React from 'react';

function Home(props) {
  return (
    <div>
      <h1> Welcome to the Roasted Roast!</h1>
      <h2>
        A Website dedicated to one of New Jerseys Greatest Natural Resources,
        the Coffee Shop!
      </h2>
      <h3>Local and Jersey Owned!</h3>
      <h2>Fan of Dunkin, Panera, or Starbucks? You are in the wrong place!</h2>

      <br></br>
      <h2>
        Now lets make a pledge of our devotion to the caffine gods and pledge
        how many cups of coffee you'll have today!
      </h2>
      <button onClick={props.coffeeFunc}>Cups of Coffee</button>
    </div>
  );
}

export default Home;
