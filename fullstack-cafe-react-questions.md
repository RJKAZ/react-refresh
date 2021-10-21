https://www.fullstack.cafe/blog/react-js-interview-questions

1. What are props in React?

Props are inputs to a React Component. They are single values or objects containing a set of values that are passed to React Components on creation using a naming convention similar to HTML-tag attributes.

They are data passed down from a parent component to a child component.

The primary purpose of props in React is to provide following component functionality

    1. Pass custom data to your react component
    2. trigger state changes
    3. use via 'this.props.reactProp' inside components render() method

2. How to create refs?

Refs are created using React.createRef() method an attached to React elements via the ref attribute. In order to use refs throughout the component, just assing the ref to the instance property with in the constructor.

3. What is the use of useState() in react

useState is one of the built in hooks in react.

in this specifc code example

const [count, setCounter] = useState(0);
const [moreStuff, setMoreStuff] = useState(...);

const setCount = () => {
setCounter(count + 1);
setMoreStuff(...);
}

useState(0) will return a tuple (tuple = finite ordered list of elements) where the first parameter count is the current state of the counter and setCounter is the method that will allow us to update the counters state.

We can use the setCounter method to update the state of count anywhere. In this case we are using it inside of the setCount function where we can do more things. The idea with hooks is that we are able to keep our code more functional and avoid class based components if not desired/needed.

4. What are higher order components?

A higher order component (HOC) is a function that takes a component and returns a new component. Bascially its a pattern that is derived from React's compositional nature. We call that as "pure components" because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.

const EnhancedComponent = higherOrderComponent(WrappedComponent);

HOC can be used for many use cases

    1. Code reuse, logic and bootstrap abstraction
    2. Render high jacking
    3. state abstraction and manipulation
    4. Props manipulation.
