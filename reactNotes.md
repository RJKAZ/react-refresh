Why Do we have Hooks? 

React used to require Classes to use React Features. 

Hooks allow us to use functions instead and makes the code shorter and easier. 

Stateful logic is logic/data that changes within the application 

Hooks are functions that always start with 'use' becasue you are using the super powers of the react framework. 

Hooks have to be used at the top level of a functional component 

they do not work inside of regular javascript functions, nested functions, loops, etc. The only exception to this is with Custome hooks. (React has 10 or so built in)

1. useState() - the most important and most used hook. 

the purpose of useState() is to handle reactive data

any data that changes in the application is called State
And when the State changes, you want React to update the UI so the changes are reflected 

the hook takes it one optional argument, which is the default state 

the function then returns an array that accepts two values you can use in your component 

they are returned in an array becasue we can destructure them with javascript to assign the values to local variables that we can name whatever we want 

the first value is the reactive date(value)
the second value is the setter 

import { useState } from 'react';

function App() {
    const [count, setCount] = useState(0)

    return (
        <button onClick={() => setCount(count + 1)}>
        {count}
        </button>
    );
}



2. useEffect() - the 2nd most important hook

this is the most confusing hook since you need to understand the component life cycle first. 

Here's a simplified breakdown of the component lifecycle

componentDidMount() {
    // initialized
}

componentDidUpdate() {
    // state updated
}

componentWillUnmount() {
    // destroyed 
}

Basiclly, the component is added to the UI (mounted) (this is only done once), then reactive data on the component can change and it gets updated, (which can happen multiple times), and finally at somepoint, the component will be removed from the UI (or unmounted)

useEffect() allows us to implement logic from all parts of that cycle.

useEffect() is a function that takes a function you define as its first argument. 

React will run your function (or side effect) after it has updated the DOM

so this code...

useEffect(() => {
 alert('hello side effect!')
})

will run when it is first initizlaied, but also every time the state changes. 

With useEffect, you can easily trigger an infinite loop, so the 2nd argument is an array of dependencies. If you add an empty array, it means there are no dependencies, which means the component will only run once when it is initizlaed. That second dependency you can set to State so it only runs when the state changes. 


3. useContext() - works with Reacts context API which shares data without passing props 

so lets say we create mood we want to share the mood accorss multiple disconected components, we can  create a context. One part of the application might be happy, so we use a context provider to scope the happy mood there. With the provider any child component can inherrit it without having to pass props down to it. 

const moods = {
    happy: ':)"
    sad: ':('
}

const MoodContext = createContext(moods);


function App(props) {

    return (
        <MoodContext.Provider value={moods.happy}>

        </MoodContext.Provider>

    );
}

function MoodEmoji(){
    const mood = useContext(MoodContext);

    return <p>{ mood }</p>
}

thats where the useContext() Hook comes into play. It allows us to access or consume the current value of the context. It will consume value from the nearest parent provider even if the parent is numerous steps up

so if the mood from the parent changes from happy to sad, it will update here automatically. 


4. useRef() - allows you to create a mutable object that will keep the same reference between renders. It can be used if you have a value that changes, like setState() but it DOES NOT trigger a re-render when the value changes.

its most common use it to grab native HTML elements from the DOM/JSX

5. useReducer() - This is very similar to setState but it does it in a different way, like useState, useReducer returns an array of two values.
The first value being the reactive state  

the 2nd value is where it differnts. Instead of a function that updates the state, you're givena function that can dispatch an action 

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default: 
            throw new Error(); 
    }
}

function App() {
    const [state, dispatch ] = useReducer(reducer, 0);
    return (
        <>
        Count: {state}
        <button onClick={() => dispatch({type: 'decrement})}>-</button>
        <button onClick={() => dispatch({type: 'increment})}>+</button>
        </>
    );
}

an action is an object that had a type that can be any string you want and an optional data payload 

now useReducer seems way more complex, but it will help with a much more complex application. Thats more when Redux comes in 

useMemo() - not really needed
useCallback() - 
useImpreativeHandle() -
useLayoutEffect() 
useDebugValue 

- Custom Hooks 




----- need to refresh all this 

React terms 

Dispatch()  is the method used to dispatch actiosn and trigger states changes to the store 

Element 