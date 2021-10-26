14 Questions

https://www.youtube.com/watch?v=JOa41r3Fr4s

1. What is Unidirectional Data Flow in React?

In React, when you update the DOM, the Dom doesn't acctually update State, so to change the dom you need to change the data/state

You have to go into the change handler and use the setState method and pass it the e.target.value, which will update the state with every keypress, thus updateing the DOM

2. What is the difference between Props and States

State is when a component defines data locally within itself, and props are when that same data gets passed down to another component

The main difference is that State can be changed, but props cannot be. To change a prop, you'd have to have the child component call up to the parent component to change the state.

3. What does is mean when we say "Lift State Up"

if you have more then one component trying to share the same bit of data as another component, put them as siblings inside another component (a parent) and put the state there

4. Whats the difference between a controled component and an uncontrolled component

Controled components, the input is bound by the state value, the input is controlled by the data
Uncontrolled components, is not bound to state

5. What are Refs in React
