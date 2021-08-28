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

so lets say we create mood we want to share the mood accorss multiple disconected components, we can create a context. One part of the application might be happy, so we use a context provider to scope the happy mood there. With the provider any child component can inherrit it without having to pass props down to it.

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

Dispatch() is the method used to dispatch actiosn and trigger states changes to the store

Element

hidden abstract functionality

everything starts with package.json
always be able to switch the node version
metrics registry is where we actually download stuff
https-proxy
every company has their own registery for metrics/npm
cache will be stored locally,
npm -v = 6.14.10
npm use v12.14.1 (to switch )
readme should be updated
and for new projects, be sure to read them thoughly

ways to optomise code/sites - local storage

no sensative data should be part of local storage

-- Redux Terms

What is Redux? is a pattern and library for managing and updating application state using events called "actions"

It serves as a centralized store for state that needs to be used accross your entire application.

The state is the 'Global' State and redux helps you manage that.

Redxu however does add complexity, code length, and has more concepts needed to learn. Its a trade off between short and long term productivitiy.

Redux is more useful when - you have large amounts of application state that are needed in many places in the app. - The app state is updated frequently over time - the logic to update that state may be complex. - the app has a medium or large sized codebase, and might be worked on by many people

So not all Apps need Redux, but for large/complex ones it can help

Redux can integrate with other frameworks, but works best with React.

So lets look at small react counter component. This tracks a number in the component state, and increments the number when the button is clicked.

function Counter() {
// State: a counter value - the source of truth/data that drive the app.
const [counter, setCounter] = useState(0)

// Action: code that causes an update to the state when something happens - the events that occur in the app based on user input, and trigger updates in the state.
const increment = () => {
setCounter(prevCounter => prevCounter + 1)
}

// View: the UI definition - a declarative description of the UI based on the current state.
return (
<div>
Value: {counter} <button onClick={increment}>Increment</button>
</div>
)
}

this is a one way data flow

- State describes the condition of the app at a specific point in time
- the UI is rendered based on that state
- When something happens, (such as a user clicking a button), the state is updated based on what occured.
- the UI rerenders based on the new state

state is decalred - state gets viewed/displayed - an action changes the state - state gets re-rendered viewed/displayed - rinse and repeat.

this such example is simple, but the can get very complex when you have multiple compnents that need to share and use the same state/data, esspecially if they are in different parts of the app.

lifting the state up to parent components can help but doesn't always.

One way to solve this is extract the shared state from the components and put it into a centralized location outside the component tree. This way any component can access the state or trigger actions no matter where in the app they are.

This is the basic idea behind Redux. a single centralized place to contain the global state in your application.

Now lets understand the concept of Immutability -

'Mutable' means 'changeable
'Immutable' means it can never be changed.

Javascript objects and arrays are all mutable by default. If I create an object or an array, you can change the contents of it.

this is called mutating the object or array. Its the same object/array, but the contents inside have changed.

In order to update values immutably, your code must make copies of exisiting objects/arrays then modify the copies.

This is essentially the Javascript spread opperator does.

Redux expects that all State updates are done immutably.

Actions -

an action is a plain javascript object that has a type field. You can think of an action as an event that describes something that happened in the application.

the type field should be a string that gives this action a descriptive name, like "todos/todo/Added". We usually write that type string like "domain/eventName", where the first part if the feature or category that this action belong to, and the second part is the specific thing has happened.

An action object can have other fields with additional information what happened. We put that information in feild called the payload.

a typical action object might look like this

const addToDoAction = {
type: 'todos/todoAdded',
payload: 'Buy milk'
}

Action Creators - An action creator is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand

const addTodo = text => {
return {
type: 'todos/todoAdded',
payload: text
}
}

Reducers -

A reducer is a function that recieves the current state and an action object, decides how to update the state if nessesary, and returns the new state: (state, action) => newState

You can think of a Reducer as an event listener which handles events based on the recieved action (event) type.

Reducers are named as such becasue they are similar to a callback function you pass to the Array.reduce() method.

Reducers do have rules they must always follow.

1. they should only calculate the new state value based on the state and action arguments.
2. they are not allowed to modify the exisiting state. Instead they must make immutable updates, by copying the exisiting state and making changes to the copied values.
3. they must not do any asynchronous logic, calculate random values, or cause other 'side effects'

here is a small example of a reducer

const initialState = { value: 0 }

function counterReducer(state = initialState, action) {
// Check to see if the reducer cares about this action
if (action.type === 'counter/increment') {
// If so, make a copy of `state`
return {
...state,
// and update the copy with the new value
value: state.value + 1
}
}
// otherwise return the existing state unchanged
return state
}

reducers can use any kind of logic inside to decide what the new state should be: if/else, switch, loops, and so on

Store - the current Redux application state lives in an object called the Store.

the store is created by passing in a r

Redcuers, Stores, and Actions -

react takes an action

very important

Notes from Travis's React front to Back Course

What are Hooks?

Hooks are functions that let us hook into react state and lifecycle features from a functional component.

useState(), useEffect(), and useContext() are the three most used, but there 10 built in Hooks and you can also create your own if you want.

To use a hook you must first import them from React

import{useState, useEffect} from 'react';

Now onto the context API, it behaves somewhat similar to Redux in that it basicly takes State out of the app component and puts it outside the main component tree.
