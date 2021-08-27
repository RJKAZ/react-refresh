1. So after setting up a broiler plate react app here is what we have to do to get Redux up and running. 

2. Lets install some dependencies first. react, react-redux, react-router-dom, and axios are the main ones. styled-components and evergreen-ui are just specific to this tutorial 

npm install redux react-redux react-router-dom axios styled-components evergreen-ui

3. Also install reselect 

4. Now lets work on our file structure (there will be alot)

5. In the SRC folder, make a containers folders, and make another folder inside called HomePage

6. In the homepage folder, make an index.jsx and a reducers.js (Redux is very reducer heavy)

7. Reducers in a nutshell take care of the State. So we'll create the reducer and start it off with default state and make it an object 

8. And in the reducers export, it takes in two things, the state (the default state) and an action  

9. Actions are composed of two properties, the type of action and the payload 

10. All Reducers have a switch, and in this instance switch just checks the action type and then uses case/ (switch/case is kind of like if/else)

11. Now, at the root of our file directory, lets make a Store.js which will take care of all the reducers. 

12. Now we have to go into the Index.js and import Provider from 'react-redux" and then wrap the <App /> component inside an <Provider> component. THhe purpose of this is give everything in the APP component (and every child) access to the Redux Store components

13. Import the Store js, and that pass it into Provider under <Provider store={store}>

14. We will make seperate files for each task, and this is where constants come into play 
in that home page folder, lets make a constants.js,  actions,js, &  selectors.js 



left off at 29:32

https://www.youtube.com/watch?v=FqSabub_yNI
