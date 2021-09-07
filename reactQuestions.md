React Terms 

1.	What is ReactJS? – 

A free and open source front-end library for building user interfaces or UI components, it is created and maintained by Facebook.

2.	Name some advantages of ReactJS? - 

Resusable Components, the Virtual Dom, and since its been highly adopted, there are no shortage of developer tools and resources.

3.	What is JSX? – 

It is Javascript XML, it’s a syntax extension of JavaScript that allows us to write HTML directly in React/JavaScript code. 

4.	What are the disadvantages of ReactJS? 

Its very high pace of development, since you constantly have to relearn how to use it. Like if you mastered React with Class based components, the shift to Function based components with Hooks would require rethinking and relearning. React itself also only applies to the UI so you need to still invest in other technologies like for a Backend. JSX can also take a little getting used to. 

5.	Difference between create Element and clone Element? – 

Create element will create a new HTML element, where as clone will clone an existing element.

6.	What is the difference between State and Props? 

State is Internal and controlled by the component itself. While props are external and controlled by whatever renders the component. 

7.	What is Redux? – 

It’s a Library for managing application state. Redux maintains the state of an entire application in a single immutable state tree outside of the parent/child relations so any component can directly receive the state

8.	What is the difference between React and React Native? – 

React Native is more designed for building cross platform mobile apps like on Android or IOS

9.	How is React different from Angular? 

Angular is based on typescript and MVC(Model View Controller) where as React is based on JavaScript and the Virtual Dom 

10.	Why can’t browsers read JSX? 

Browsers can only read JavaScript objects and JSX is not a regular Javascript object. 

11.	What do you understand by “Single” Source of truth? – 

Its ultimately wanting to make your components controllable. Input fields for example are by default not controllable meaning they render data from the DOM, and not the state. 

12.	What is React Router? – 

It’s a library for touting in react, allowing you to navigate among the views of various components. 

13.	Why is Switch keyword used in React Router V4

14.	Why do we need a Router in React? – 

Not all react apps need it, but its very helpful. It allows you to navigate different components of a page without refreshing the pages. Like if you have a search component, and navigate to an about page, typically the search would be gone, but with routing, you can navigate around the app and the search you made would retain. 

15.	What is render() in React? – 

The purpose of render is to display the specified HTML code inside the specified HTML element. 







16.	What is Flux in Javascript – 

- It’s a pattern for managing data flow in react. The passing of data down from Parent to child is what flux detmines as the default method for handling data.

17.	What are refs in React? 

- Refs provide a way to access DOM Nodes or React Elements in the render method. 

18.	Difference between Dom and virtual DOM in React

19.	What are Controlled Components – 

- A controlled component is on that takes it current value thru props and notifies changes through a callback like onChange. 

20.	What are uncontrolled Components? 

- Stores its state on its own internally and you query the dom using a ref to find its current value when you need it. 

21.	Whats is the difference between an element and a component in react? 

- Elements simply make up the components. 

22.	Explain the difference between functional and class components? 

- A functional component is  plain javascript function which accepts props as an argument and returns a react element. A class component requires you to extend from React and create a render function. 

23.	What is Props – 

- Stands for properties, its like a global variable that we can pass to components.

24.	What is State in React and how is it used? 

- State is a store of data 

25.	How can you update the State of a Component? 

- To update out state we use setState() and pass in an object

26.	What is the use of the arrow function in React – 

- If you use arrow functions within render, each call to render will create new function objects

27.	List some of the cases you should use Refs – 

- To find the state/data from uncontrolled components

29.	What is the significance of keys in React

- Keys help react identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity 
    <li key={number.toString()}>
        {number}
    </li> 

30.	Describe how events are handled in React 

- Handling events with React elements is very similar to handling events on DOM elements, just with some syntax differences. 
    1. React events are named used camelCase rather then lowercase
    2. With JSP you pass a function as the event handler, rather then a string. 

    in regular HTML

    <button onclick="activeLasers()">
        Activate Lasers
    </button>

    in React

    <button onClick={activateLasers}>
        Activate Lasers
    </button>

31.	Explain the Components of Redux

- The three components of Redux are Actions, Store, and Reducers. 
    1. Actions are events, they are the only way you can send data from your application to your redux store. 
    2. Store holds the application state. Its recomeneded you keep only one stote in any redux application. You can access the state stores, update the state, and register or unregister listeners via helper methods. 
    3. Reducers are pure functions that take the current state of the application, perform an action and return a new store. There states are stored as objects and they specify how the state of an application changes in response to an action sent to the store. 

32.	What is Context 

- React Context is  a method to pass props from parent to child components by storing the props in a store (similar to redux) and using these props from the store by child components without actually passing them manually at each level of the component tree. 

33.	Explain the mixin or higher order components (HOC) in React

34.	What are synthetic events in React

- A synthetic event is a cross-browser wrapper around the browsers native event. 

35.	What is Redux Thunk used for 

- It is a middleware that allows you to call the action creators that return a function (thunk) which takes in the stores's dispath method as the argument and which is afterwards used to dispatch the synchronous action after the API or side effects have been finished. 

36.	What can you do with HOC?

- A higher order componet is an advanced technique in React for reusing component logic. 
    1. On the mount, add a change listener to datasource
    2. Inside the listener, call setState whenever the data source changes
    3. On unmount, remove the change listener. 

37.	Where were the major problems of the MVC framework

- A core princepal of the framwork is the view layers ignorance. Views are dumb object. they only know whow to present data, they don't know or understand what they are presenting. 

39.	How are Actions defined in Redux

- Actions are the only source of information for the store as per Redux offical documentation. It carries a payload of information for your application to store. Actions are plain javascript opbjects that must have a type attribute to indicate the type of action performed. 

40.	Explain the Role of a Reducer 

- A reducer is a pure function that takes an action and the previous state of the application, and returns a new state

41.	What is the significance of Store in Redux -

- Its an immutable object tree. Its essentially a state container which holds the applications state. Redux only has a single store in the application. And when a store is created, you need to specify the reducer. 

42.	What are Pure components? 

- They are components which do not re-render when the value of state and props has been updated with the same values. If the value of the previous state or props and the new state or props is the same, the component is not rerendered. 

43.	Why is the Switch Keyword used in React Router v4?

- The <Switch/> component will only render the first route that matches/includes the path. Once it finds the first route that matches the path, it will not look for any other matches. 

44.	How is React Router different from conventional routing 

- React router allows navigation thru the site without refreshing any part of it. 
