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

refs provide a way to access DOM nodes or React elements created in the render method

In typical React dataflow, props are the only way that parent components interact with children. To modify a child, you re-render it with new props. However there are a few use cases where you need to imperativley modify a child outside of the typical dataflow. The child to be modified could be an instance of a React Component, or it could be a DOM element. For both of thesec ases, React provides an escape hatch.

Refs are ideal for managing focus, text selection, or media playback, triggering imperative animations, and integrating with thrid party DOM libaries.

6. What are keys and why are they important when we are trying to render lists in react?

It creates an unique ID for each item in a list that unique identifies them.

7. What is Context

It is a mechanism that allows us to pass data from one component down to another. Its not all that different from props in a way, but props only go down from one component to the next one. So a parent can only pass to a child. So if a parent wants to pass a prop down to a grandchild, it still has to go thru the child. Context can be passed to any component in the same tree. So a parent can directly pass down to the great grand children. Context essential prevents prop drilling.

8. What is a higher order component?

These are still a thing because they were so widly used in code bases so you are likely to come accross them. And its also important to understand to understand how we got to where we are now with hooks and render props.

9. What is the Render prop and what is it used for?

10. What are Hooks and what are they good for (what problem are they solving)

    - They allow us to hook into the life cycle methods of a React life cycle component without having to define the class, so we can use functional components instead
    - Hooks allow us to share logic, like a higher order component or a render prop, and we can create custome props
    - Higher Order Components and Render props give us whats known as wrapper hell.

11. What is the useEffect Hook and how is it used

it can basicly do three things. It can act like a componentDidMount, a componentDidUpdate, and a componentWillUnmount

12. What is React.memo

allows us to make a component whole new render if the props its taking are changing, as in if the props don't change, you don't want things to re-render

13. What is the use callback hook and what is it used for?

14. What is useMemo()

it allows us to memorize values
