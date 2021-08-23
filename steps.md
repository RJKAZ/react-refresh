This is my notes for the 1st React Project GitHub Finder

This app will get refactored a few times

Step 1 - we create the broiler plate

npx create-react-app github-finder-1

If I was going to be putting this into an empty folder, I would just do npx create-react-app .

that " . " at the end will prevent the command from making a new folder and it will just install it in the current directory

1. first thing we should do is go into the index.html file an change the title in the html to what our project will be. Also feel free to remove the notes and psuedo code

Although we won't do much on this index.html page, it is very important since everything will get routed thru this file

The Div with the id of Root is the most important part of the page here.

2. Now lets move into the SRC folder and access the index.js - kind of the 2nd most important file

it imports three very important things, the react libary, the reactDom, and the App, which is the main app component

In the file is a method called ReactDom.Render which takes in two things 1. The main app component, and then where we want to render it in the html file 2. Thats where it renders it to the index.html by targeting that div with the root id, by using document.getElementById('root')

In the lone div, you don't have to name it root, you could really name it anything you want, but only so long as you change the name in the index.js file as well. But typically just leave it at root.

3. Now lets run the server, cd into the folder if you have it in a seperate folder, and type npm start, which starts the default broiler plate app.

4. Now lets take a look into the App.js file, this file is main app compent, that gets imported into the index.js file which then gets sent to the html to render the app.
   all compoents -> App.js -> index.js = index.html

since this file is built from the broiler plate code in the npx command, it has the logo image file and the app.css file which is like the global css.

And the main App itself is actually a function. And React components can be functions or classes. The NPX create-react-app used to render the main app as a class, but more recently it does so as a function

Now for the sake of this project, will we take a step back and do this as a class, but when we refactor, we will do so as a function using hooks

the reason for this is because a Class component can have State, and previously Functional components could not have State. Hooks allow a Functional component to have State.

So in the core function, everything we see displayed in default page after running NPM start is essentially here.

There are also other files within the SRC folder like the service workers, or reportWebVitals.js, setup tests, and an index.css, but at this point they are not important, and likely we will delete them.

5. the Next step is the cleanup step where we cut all the code from the broiler plate we dont' need. We will also change the app compenent from a function to a class.
   During all this the server and the rendered page will break/crash, which is normal at this stage.

The files we will be getting rid of for the scope of this application are - App.test.js - index.css - logo.svg - reportWebVitals.js - setupTests.js

We delete them and this leaves only three files, the index.js, the App.js, and the App.css

6. As of now the app won't work, so go into the index.js and remove the imports of the files we deleted. In this case from the index.js, I am removing the import of the index.css and the import of the reportWebVitals. Also at the bottom of the index.js is a bit about the reportWebVitals. you can delete this as well.

7. If you save the app still won't work. Now go into the App.js file and remove the logo.svg file. This tutorial also imports React at the top, I think they changed it so it no longer requires that. But untill it becomes a problem, I will add it in just to make following the tutorial eaier. import React from 'react';

Now in the main div inside the return compenent, aside from the classname, clear it all out, from <header> to </header>
And in the inside, for now lets just add a simple <h1>Hello from React</h1> just so we can verify the page will render properly.

go back to the browser, (may have to refresh the page) and it should be a blank white page with the Hello from React at the top.

The reason why its centered and bolded is becasue of the global style sheet App.css

8. For our purposes, go into the App.css and just delete all the default CSS (but leave the file itself). Save and the HTML page should still be displaying the H1, but without the styleing. Now since this is a react project and not a CSS project, the CSS is already done, so just take it from the tutorial. Either copy and paste that css into the App.css file or just swap the files out.

Some of the more complex CSS stuff will be explained as the project goes.

9. Now, lets turn the main App Component from a function to a class

So go into the App.js file - change function to class, still call it App, but get rid of the parenthases - Now we can't return directly from a class - so we need a method, which is basiclly a function within a class
-that method needs to be called render() which is a lifecycle method
-there are other lifecycle methods, but render() is required since it renders the output - take the return and move it into the renderer - now this won't work on its own, we need to extend the core react component - so alter the code so it says class App extends React.Component {

        so that core function...or rather that core class should look like

class App extends React.Component {
render() {
return (

<div className='App'>
<h1>Hello from React</h1>
</div>
);
}
} - run NPM start and the page should render fine - It does!

    - one bit of refactoring, you can remove the "React." from the class and just add it to the top React import

    it should look like this -

    import React, { Component } from 'react';
    import './App.css';

    class App extends Component {
        render() {
            return (
                <div className='App'>
                    <h1>Hello from React</h1>
                </div>
            );
        }
    }

10. Just to clarify one thing, React uses JSX not vanilla Javascript, its similiar but some differences. for example

in Javascript you add a class with "class" but in JSX you add classnames with "className"

Now in the App.js in the main return you can only have one div so everything has to be put in that div. If you add things like <h2> or <p> outside the Div, it will pop off errors. So you must make sure you only have one parent element.

now for some reasons, you may not want to use a Div as the parent element. Another option you could do is using whats sort of called a ghost element, its a fragment.

<React.Fragment>

<h1>Hello from React</h1>
<h2>I mean it!</h2>
</React.Fragment>

of just do Fragment, and just call it at the top React import

import React, {Fragment, Component } from 'react';
<Fragment>

<h1>Hello from React</h1>
<h2>I mean it!</h2>
</Fragment>

or you could just use empty brackets.

<>

<h1>Hello from React</h1>
<h2>I mean it!</h2>
</>

but for our purposes, its easier to just use div.

Also, you could technically refactor and use regular vanillia Javascript, but its just easier to use JSX.

Section 3 - start

Now we begin creating the navbar component

1. In the SRC folder, create a folder called Components
2. Within that folder, create another folder called layout
3. Inside the layout folder, we will create the navbar component
4. Typically for React components, its expected to write them starting uppercase.
   - Navbar.js
5. Since we have the react extension installed, we can create easy broiler plate react code for component pages. Since this project is made "Class Based" we shall use ' rce ' on the blank js page and hit tab. It will base the file on the files name (Navbar) and then exports it at the end. Just for now, make a simple H1 tag saying Navbar
6. Now we have made the Navbar Component, we need to import it into the main App.js file at the top with the rest of the imports
7. Now that we imported it, we have to insert it. so remove the h1 tag and just replace it with <Navbar />
8. Now the page should say Navbar, which is what we have in the H1 tag in the Navbar component
9. Now back to the Navbar.js file, we will change that <div> to a <nav> and we'll add some classes.
10. We add the classes navbar and bg-primary which are defined in the pre-done CSS.
11. Now we want to add a Font Awesome icon, so get the link tag from google (cdnjs)
12. Insert the link tag in the index.html and put it right above the title tag. This will allow us to use Icons throught the project
13. Back to the Navbar.js file and iinside the h1 tag we will add a github icon
    <i className="fab fa-github"></i>
14. Now it has the Github icon right next to the text of Navbar, however we want to add Props to this
15. Props are properties you can pass into an component from outside it
16. So in the App.js file, we will pass in a prop called title
    <Navbar title="Github Finder" />
17. Now to use the prop, we have to inset it using curley brackets. So in that h1 tag right after the icon tag, add {this.props.title}
18. We shall also use a prop for the Icon, in pretty much the same way we did title
19. So in App JS, add to the Navbar component icon='fab fa-github'
20. And then in the Navbar component {this.props.icon}
21. But if you don't pass the props in you get nothing, so there is a way to define default static props
22. In the Navbar component, add above the render() method
    static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
    };
23. This makes those props by default, so if we don't pass them in to the App.js file, they will still render. But if you do pass a different value into the App.js, it will override the default
24. Now we want to add in prop types and there is a quick way of doing this. In the Navbar.js file
    up in the imports, type ' impt ' and it will autocomplete into this
    import PropTypes from 'prop-types'
25. Now to declare them, below the static default props, add

static propTypes = {
title: PropTypes.string.isRequired,
icon: PropTypes.string.isRequired
}; 26. With this in place, its telling the page to expect a string. So if we try to manually pass in a number value, it will still work, but we will get an error warning in the console.log that it expected a string 27. In that static prop types, if we pass in an Array instead of a string, it will work without error

- Break to talk about State -

Component Level State means that your state is contained inside a single component  
so we will add a useritem component and add some state to it.

28. So lets make a new Component, go into the components folder and make a new folder called users.
29. in that users folder, make a file called UserItem.js
30. In that UserItem.js file, add generate a class based component with rce, and in the main div just add a default text of UserItem
31. Now lets bring it into the App.js file by importing it and then adding it below the navbar
32. Save and this should render the text of UserItem underneath the Navbar

And now we want to add State and there are a few ways we can do that with a class based component
One way to do that is by using a constructor function, but thats not recommended. But for this purpose we shall do so

33. In the UserItem.js, in the class App, but above the render() method, add
    constructor() {
    super();
    this.state = {
    id: 'id',
    login: 'mojombo',
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    html_url: 'https://github/com/mojombo'
    }
    }

34. Eventually we will be passing this data in from Githubs APIs, but for now, lets just use some dummy/random data just to populate the page.
35. So all that data is now defined in our state we have to use it
36. One the main Div on this page, lets add a className for card and text-center
37. In that Div we are also going to add an Avatar, so we need an image tag.
38. Now the src of the image is going to be dynamic so we use curly braces and we will pull it from state. Now when you want to pull something from State with Class, you use {this.state.} and then whatever you want, which in this case is the avatar url
39. We will also add a CSS className of "round-img"

- Side note - if you want to do in-line stylying in React, you can do that with double curly brakets inside the HTML element -- style={{ }} --
  there are a few differences, you can't use - so you have to camelcase things instead
  so background-color would have to be backgroundColor, and for determining a color, you can't just write red, you have to write it as a string 'red'

40. Lets add to that an inline width style of 60px

so the code at this point should look like this

render() {
return (

<div className='card text-center'>
<img
src={this.state.avatar_url}
alt=''
className='round-img'
style={{ width: '60px' }}
/>
</div>
);
}
}

41. So now if we go back to the browser we shall see the avatar displayed
    Essentially the Avatar url is stored in the component state, and now outputing the image.
42. So lets add some more to the page
43. In that same main card div, add an H3 with the this.state.login which will display the user name.
44. And make another Div and a link tag for more, that uses the html_url stored in the state.

so add this

  <h3>{this.state.login}</h3>

        <div>
          <a href={this.state.html_url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>

45. Now, we don't really have to use a constructor to store state, so we will refactor the initial class component

this is it before with the constructor

export class UserItem extends Component {
constructor() {
super();
this.state = {
id: 'id',
login: 'mojombo',
avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
html_url: 'https://github/com/mojombo',
};
}

and this is it refactored without the constructor. The code still works.

export class UserItem extends Component {
state = {
id: 'id',
login: 'mojombo',
avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
html_url: 'https://github/com/mojombo',
};

46. Now in the code we are pulling out the values by using 'this' constantly, there is a way to refactor around that

47. At the top of the main render, we declare a variable that destructures the state
    const { login, avatar_url, html_url } = this.state;

48. With that declared, we can remove 'this.state' from the code, so refactored it should look like this.

render() {
const { login, avatar_url, html_url } = this.state;

    return (
      <div className='card text-center'>
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: '60px' }}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className='btn btn-dark btn-sm my-1'>
            More
          </a>
        </div>
      </div>
    );

}
}

- and the code still works!

49. Now up to this point we have an userItem component that has a state with a single user, which isn't really what we want. What we want is a component that has an array of users
    so lets refactor with a new component. In the users folder in components, make a Users.js

50. generate a default class component rce - you can take out or remove the export before the class designation. It doesn't matter.

51. Now we're gonna add State, so state will equal an object, which will define above the render() method. But this time is will have a users array

52. Now eventually this will pull the data from Github directly, but at this stage, I will just use dummy data. The previous example, I'll just copy and paste a few times. (just be sure to change the ID for each)

53. Now what we want to do is go down to our render and loop thru these users. We will effectivly create whats called a list in react. So in the return div we will add an expression, {this.state.users} and since we want to loop through it, we will add a .map to the end.

- fyi - map() is a high order array method and it takes in a function ( a callback function)
- now this function has a parameter that represents each user, and we shall call it user.
  and then make an arrow function. so this will say, for each user, I want to render... for now... a div. And we will test this out by trying to access the user.login

so the render should at this point look like this

render() {
return (

<div>
{this.state.users.map((user) => (
<div>{user.login}</div>
))}
</div>
);
}

Now this won't work yet since we need to add the component to the App.js

54. Now we no longer need the userItem component anymore, so lets refactor the app.js to take in Users.js component instead. So change the import and in the return

we save and now it will render just the user names from the dummy data, so in my case, mojombo three times.

55. now the console log will show error about each child in the list should have a unique key props. Whenever you have a list, you need to have a unique key. To fix this, we go into the users.js component, in the div inside the map we will add a key.

it should look like this.

return (

<div>
{this.state.users.map((user) => (
<div key={user.id}>{user.login}</div>
))}
</div>
);
}

save and the error should be gone.

56. Now instead of just outputting a user div for each item in the state, we want to output a user item, which is the compent we just created for this. So lets do that.

57. So un Users.js, lets import UserItem.js at the top

58. And in the return, lets replace the div with the UserItem.js component. We want to still pass in the key, but we don't need to add the user.login here. Instead we want to pass in the entire user. What we're doing is looping thru the users in the state, and for each one, the user variable will represent all the single user object with all their data in it. And what we are doing is passing it in as a prop to UserItem

59. So the render() should look like this now

render() {
return (

<div>
{this.state.users.map((user) => (
<UserItem key={user.id} user={user} />
))}
</div>
);
}
}

60. Now this as is will work but it will render the same user item 3 times. (the tutorial I'm following used different data for each three, I was just lazyier)

61. This is happening because the state in User Item is still the single user data. So we can remove that state entierly. We will use Props instead

so instead of pulling the values from this.state

- const { login, avatar_url, html_url } = this.state;

we can pull the values from this.props instead

- const { login, avatar_url, html_url } = this.props.user;

- also I'm going to change the names in the dummy data to demonstrate this works.

- save, refresh, and it does indeed work.

61. Now we're going to change some the sites cosmetic appearance by doing something new with CSS by setting a variable to a styled object. We will also use the grid system.

62. So in the Users.js, at the return, we will add a style attribute to the main div. and instead of using in-line, we will set it to userStyle

63. We will then create a variable below the class defining userStyle

it should look like this

render() {
return (

<div style={userStyle}>
{this.state.users.map((user) => (
<UserItem key={user.id} user={user} />
))}
</div>
);
}
}

const userStyle = {
display: 'grid',
gridTemplateColumns: 'repeat(3, 1fr)',
gridGap: '1rem',
};

- and this should now return a grid row showing the 3 profiles

64. Now there is a container class we want to add thats in the pre-done global stylesheet and we want to wrap that around everything that is not the navbar.

65. So lets go to App.js, inside the main return div, add a div below the Navbar component with the classname "container" and then put the Users component inside that div

the code should look like this

class App extends Component {
render() {
return (

<div className='App'>
<Navbar />
<div className='container'>
<Users />
</div>
</div>
);
}
}

and save and refresh and it should show a slight change to the appearance.

- Now before we continue, lets just talk about Stateless function components. Originally they were created for components that just didn't have State. And at this point out UserItem.js Component has no State, since everything is getting passed in as a Prop.

- Also at this point, our Navbar component also doesn't have any State. So there is really no reason for these components to be classes. So now we will convert both the UserItem.js Component and the NavBar Component into Object based Components.

- So now lets convert some class based components to functonal components.

66. Lets start with the UserItem.js Component first

this is how it starts

export class UserItem extends Component

now to make it a function (with an arrow function)

const UserItem = () => {

67. Now since its a function we don't need render() anymore, so get rid of the render() and its corresponding curly brackets

68. Also we can get rid of the import of {Component} at the top import, so get rid of that too

69. Now as is, this code won't work, because since we're not using class anymore, we can't use the "this" keyword. We now have to pass the props into the function instead

70. Then get rid of this...so 'this.props.user' will know become 'props.user'

so this is the now changed code for the UserItem.js component

---

import React from 'react';

const UserItem = (props) => {
const { login, avatar_url, html_url } = props.user;

return (

<div className='card text-center'>
<img
src={avatar_url}
alt=''
className='round-img'
style={{ width: '60px' }}
/>
<h3>{login}</h3>
<div>
<a href={html_url} className='btn btn-dark btn-sm my-1'>
More
</a>
</div>
</div>
);
};

export default UserItem;

---

Now we shall do the same to the Navbar - this will be a bit more difficult because we have static default props and proptypes which are inside the class component.

71. So to begin, lets change it to an arrow function and pass in the props

const Navbar = (props) => {

72. So for now, cut out the static defaultProps and propTypes, and move then to the bottom outside of the function.

73. Now instead of calling them static, we will name them after Navbar instead

so 'static defaultProps = {' will now become 'Navbar.defaultProps = {'

74. And then do the same for proptypes. Navbar.propTypes

75. Get rid of render() and its corresponding curly bracket.

76. Get rid of the parantheses around the passed in props up by the arrow function

77. Get rid of the 'this' keyword (which is used twice here)

78. Get rid of the imported {component} at the top import

79. Save, refresh if needed, and the code still works.

- Now lets jump back to the UserItem.js component for we will refactor things a bit more

const UserItem = (props) => {
const { login, avatar_url, html_url } = props.user;

we can destructure the props directly into the arrow function instead of having to declare them sepretly. But since it will be destructed, you need to add an extra curly braces.

const UserItem = ({ user: { login, avatar_url, html_url }}) => {

79. Now lets do the same to our navbar.

const Navbar = ({ icon, title }) => {
return (

<nav className='navbar bg-primary'>
<h1>
<i className={icon} /> {title}
</h1>
</nav>
);
};

80. So now both the Navbar and the UserItem components are no functional components.

81. Now in UserItem, we are passing in the user prop so we should import proptypes into the component.

import PropTypes from 'prop-types';

82. Then down at the bottom below the function, we have to add to the bottom

UserItem.propTypes = {

}

83. Also the user prop type we are passing in is an object. so add in ptor which adds a broiler plate, it should look like this

UserItem.propTypes = {
user: PropTypes.object.isRequired,
}

84. Save and refresh, and the code is fine.

---

Now we will do some new things. In our User.js Component, we have the user data hard coded in at this point. We want to refactor this so that the State will be in the App.js file instead.

85. So in the App.js file, lets add a lifecycle method

86. In the class component, above the render, add
    componentDidMount() {
    console.log(123);
    }

what this will do, is as soon as the app is loaded, that console.log will fire off.

this is important because when we make an HTTP request...like to github, this is where we would want to do it.

And this is what we will do, but with Axios

87. So in the project folder, install axios via npm in your terminal.
    npm i axios

88. restart your dev server

89. Now we have to import Axios into the App.js

import axios from 'axios';

90. Now we want to make a get request to the github api

so in to the componentDidMount() method, remove that console.log and instead add in

axios.get('https://api.github.com/users');

- Now axios deals with promises, so we'll add a .then, then in there get a response so now we will console.log(res.data)

  componentDidMount() {
  axios.get('https://api.github.com/users').then(res => console.log(res.data));
  }

91. This should give us the data, so save/refresh, and console.log and you should see the data in the console. And yep, this should pull up the 30 users.

92. Now add an async to our component did mount and create a variable for the response, where we will await the request.

93. With that we can also get rid of the .then, and then add a new console.log statement to verify this works

class App extends Component {
async componentDidMount() {
const res = await axios.get('https://api.github.com/users');

    console.log(res.data);

}

94. Save, and refresh, and the code still works fine.

95. Now, we want to put the user data that comes back (res.data) into our State of our app component, which we technically don't have yet.

96. So lets add this to our code.

state = {
users: [],
loading: false
}

-- we set loading to false, because there will be a moment in time before we get the data back, so while its fetching, we want loading to be true, and when we get the data, we want loading to be false.

like saying, if this data isn't loaded, show us a spinner

now state can't be directly changed. I can't just write

this.state.loading = true

That is not how you do it in React, with Class based components we have to use this.setState

this.setState();

and then in there we can pass in the object with the part of the state we want to change, which is loading, and then we want to change it to true.

async componentDidMount() {
this.setState({ loading: true });

so now when the component runs, it will change the state to true.

and then after we make the request, and get the response, we then want to reset the state.

In resetting the State, we want to set two things

we're gonna take users and set it to our res.data, and then set the loading back to false.

React dev tools should confirm this all works up to now

97. So now that we have those users in State, we want to pass those down into our Users.js component thru props

98. So in the app render(), in <Users /> lets pass in two things

<Users loading={this.state.loading} users={this.state.users} />

- side note, if I'm not getting data back, I might have exhausted my requests from the API, you typically only get like 50 or so requests per hour, unless you get an API key

99. But anyway, now we have out Users component that is getting the passed in State of loading and the user data from the passed in Props

100. Save and lets go to Users.js

101. We no longer need to hardcoded data in the state so we can get rid of it. So just delete the whole State.

102. And then in the render method, we need to change the this.state to this.props

103. So in the app.js the cass component should look like this.

class Users extends Component {
render() {
return (

<div style={userStyle}>
{this.props.users.map((user) => (
<UserItem key={user.id} user={user} />
))}
</div>
);
}
}

104. Save and refresh and you should get the 30 users rendered.

-- Now lets create a spinner component and add api keys for github

105. the spinner gif will be provided by the course lecturer, move or copy the spinner.gif in the layout folder

106. Now we'll make a new component in layout called Spinner.js

107. It will be a functional (arrow function) component, for the broiler plate for this, type in racf, and it will create an arrow function for us.

108. Because of webpack, we can import images, so at the top lets import the spinner.gif

109. We will do this as a fragment, so be sure to add { Fragment } to the top react import

110. Change the <div> to <Fragment>, and inside the fragment lets put an image with the source of spinner. define the alt as "Loading..."

111. Lets also add a little bit of styling, so lets inline style (again, double curly braces). A width of 200 pixels, a margin of auto (so its in the middle) and display of block

the code should look like this.

<Fragment>
    <img src={spinner} alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block' }}/>
</Fragment>

- one thing with arrow functions, if we don't have any other Javascript going on and its just the return, we can get rid of it. In fact you can just return the frament directly from the arrow function

export const Spinner = () => {
<Fragment>
<img src={spinner} alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block' }}/>
</Fragment>
}

- no that we have the spinner component, lets go into Users.js
- remember the Users component got passed in 'loading' and 'users' as props.

112. Since this Users.js component now has no state, we can turn this into a functonal component, so lets refactor the class into a function

113. now instead of just passing in props to the arrow function, we will destructure and pass in users and loading. And with that done, you can remove this.props and just leave it as usersmap. Also get rid of the render and its matching bracket.

the code should look like this

const Users = ({ users, loading }) => {
return (

<div style={userStyle}>
{users.map((user) => (
<UserItem key={user.id} user={user} />
))}
</div>
);
};

114. in this Users.js component, import in the spinner

115. and now lets add an if statement above the return, to say that if the app is loading, to return the spinner else its just returning all the users. You also have to copy and paste the return into the if/else statement. The code should look like this.

const Users = ({ users, loading }) => {
if (loading) {
return <Spinner />;
} else {
return (

<div style={userStyle}>
{users.map((user) => (
<UserItem key={user.id} user={user} />
))}
</div>
);
}
};

- not to self, when doing the Spinner.js component, the broiler plate adds and export to the top and doesn't have the export default Spinner at the bottom. It needs that to import the spinner.

- also at this point, I think I timed out the API.

116. Now lets add our prop types, so import them in at the top, and then below the return likes bring it in, and define the prop types for the users as an Array, and the prop type for loading as a bool (boolan)

it should look like this

Users.propTypes = {
users: PropTypes.array.isRequired,
loading: PropTypes.bool.isRequired
}

- now lets get that Github API Key

- so we need to register our project with github

https://github.com/settings/applications/new

the homepage and callback url you can just use localhost:3000/ for

And just pic a name and give it a description if you want to.

this gives me a client id and a client secret

we will put these in enviroment variables

so in the root directory of the application, lets create a .env.local file

So when we deploy this project to netlify eventually, we want to send the .env file to them, but for public directories you typically don't want to do that.

So thankfully with npx create-react-app, the gitignore by default includes .env.local so we don't have to worry about these values hitting our github or public repo.

In the .env.local file, but this in

REACT_APP_GITHUB_CLIENT_ID=''
REACT_APP_GITHUB_CLIENT_SECRET=''

but populate with my client ID and secret

- in Users.js, remove the {Component} from the import

so now lets go into the App.js, and we have to add these enviroment variables into our get request

its kind of...complicated so here's the code (note that we had to use backticks)

const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

So weird error I just encountered. I was getting an error of

Error: Spinner(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.

to fix this, I had to change a pair of curly brackets into parantheses

in the Spinner.js component, I had

const Spinner = () => {
<Fragment>
<img
src={spinner}
alt='Loading...'
style={{ width: '200px', margin: 'auto', display: 'block' }}
/>
</Fragment>
};

to make the code work, I had to change { to (

const Spinner = () => (
<Fragment>
<img
src={spinner}
alt='Loading...'
style={{ width: '200px', margin: 'auto', display: 'block' }}
/>
</Fragment>
);

and it works fine now...not sure why I had to do that at all, but whatever.

Now lets work on a Search form

117. In the Users folder, lets create a new component, Search.js, and use rce for a class based component

118. So in the return, lets make our HTML markup, a from element with a classname of form.
     and two input values within it.

the code should look like this

    <form className='form'>
                    <input type='text' name='text' placeholder='Search Users...'/>
                    <input
                        type='submit'
                        value='Search'
                        className='btn btn-dark btn-block'
                    />
                </form>

119. Now lets import the search component into App.js, and then we'll inset it into the App.js render right above Users

120. Now we have to add State to the Search component
     above the render add in

state = {
text: ''
}

121. then add to the first input in the search component value={this.state.text}

as a result of that, you technically won't be able to type in the search field because it is a controlled component. To type in we need to incorporate a on-change, since it needs to fire off and update the state, since this input is now attached to the State

122. So in the first input, add onChange={this.onChange} below the value we just set.

123. Then below the state and above the render() we have to define the onchange

onChange = (e) => {
this.setState({ [e.target.name]: e.target.value});
}

- and now we can type in the search field

so it should look like this

onChange = (e) => {
this.setState({ [e.target.name]: e.target.value });
};

but since we only have one expression, we can get rid of the curly braces

onChange = e => this.setState({ [e.target.name]: e.target.value });

so this will update the component state in the form

124. Now we want to add an onSubmit, so in the form element, add it

 <form onSubmit={this.onSubmit} className='form'>

125. And now we'll define it above the onChange(). Little note, it we don't use an arrow function, it becomes more complicated to define the state.

onSubmit = (e) => {
e.preventDefault();
console.log(this.state.text);
};

- so now we want to be able to search for users based upon what we enter in our search form. With the github API we can make a request to the end point of GET /search/users, and then we can add a parameter of Q which is a query string we want to search for.

- Now we want this to be in the main app component,

- So the (this.state.text) value in the Search.js component, we have to pass that up to the main app component thru Props

126. So lets rewrite that onSubmit in the Search.js component

onSubmit = (e) => {
e.preventDefault();
console.log(this.state.text);
};

we will rewrite it as

onSubmit = (e) => {
e.preventDefault();
this.props.searchUsers(this.state.text);
};

and then we also want to add into it this.setState(); to clear the form by setting the local component text to nothing

    onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({text: ''});

};

- however the props.searchUsers doesn't actually exist at this point, but since we are calling it as props.searchUsers, we can call it as a prop in the App.js where we inputed the search component.

so instead of sending a prop down, we are sending a prop up

127. So open up the App.js and lets make some changes. So we are going to give Search the prop of searchUsers and then set it to a method of the this component, this.searchUsers

<Search />

- becomes

<Search searchUsers={this.searchUsers} />

128. And now we have to create the searchUsers function above the render, and this searchUsers function should take in text since we passed in (this.state.text) on the onsubmit

searchUsers = (text) => {

}

and lets add a console log to make sure it works

and it does!

So to reiterate, once we submit this form in the Search.js Component, its calling onsubmit, and we're calling a function in the props called searchUsers and passing in the text.

In our App.js, we set the props to call this.searchUsers in the app.js

Now we want to make a call to that endpoint SEARCH/Users, so we will use Async/Await

129. So lets add Async to the searchUsers arrow function in the app.js

130. And copy our get request from above and paste in inside the searchUsers component. Now the endpoint with this one will be different so we have to change that.


    searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data, loading: false });

}

131. We have to make one more change, this endpoint won't return res.data it returns res.data.items

this.setState({ users: res.data.items, loading: false });

- So now that we're doing this, there is no reason to fetch the original users. So comment that code out (don't delete it yet)

So save and refresh your page and the pade still works, but those default users are gone.

Now it will only display what is search, so search for any name and it will work

131. One final part, add loading to true in the searchUsers function

this.setState({ loading: true });

- this will give us the spinner

132. We should also add searchUsers as a proptype in the Search.js component

import PropTypes from 'prop-types';

and in the Search component itself, add in this below the state.

static propTypes = {
searchUsers: PropTypes.func.isRequired
};

- So now the app itself works, but we have a few things we need to do still, like adding a clear button

133. So in Search.js, lets go underneath the form and add a button and give it a few classnames, set it to say Clear, and add an onClick to call a prop method we're gonna call clear users

<button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>

134. Now since its a prop lets add it to our prop types above

static propTypes = {
searchUsers: PropTypes.func.isRequired,
clearUsers: PropTypes.func.isRequired
};

- now remember, when we're calling {this.props.clearUsers}, we're sending it up, so we have to catch it on our App.js where we have the SearchComponent imbedded.

135. So in the App.js, we need to add this to the search component

<Search searchUsers={this.searchUsers} clearUsers={this.clearUsers}/>

136. And then we need to add the clearUsers function to clear out the state. So we do an arrow function that sets the state to users as an empty array, and loading to false.

- save and refresh and it should work, however we only want the clear button to show if we have a search already.

- there are a few ways we can do this, but we'll do so as a prop

137. So in App.js, where we placed the Search Component, we'll add in showClear and set it to an expression

so if this.state.users.length is greater then 0, lets pass in true for this prop. else, lets pass in false.

<Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true: false }/>

138. so now we're passing in showClear as a prop, so we also want to define it up in proptypes in the Search.js component (note, it is a boolean)

showClear: PropTypes.bool.isRequired

139. And then we want to wrap our button in an expression that says it this.props.showClear is true, then we want to show the button

{this.props.showClear && (
<button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
)}

- so it all works fine, but we're going to destructure some more of the code

140. So lets add this below the render() but above the return in the Search.js Component

const { showClear, clearUsers } = this.props;

with that we can remove the this.props from showClear and clearUsers

{showClear && (
<button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
)}

- and now we cna do a little more destructuring in app.js becasue we call this.state quite a few times

141. In App.js, below render and above return, put this

const { users, loading } = this.state;

and then we can cut out this.state from the code in the return

render() {
const { users, loading } = this.state;
return (
<div className='App'>
<Navbar />
<div className='container'>
<Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true: false }/>
<Users loading={loading} users={users} />
</div>
</div>
);
}
}

142.  Now lets work on setting up some alerts. Lets start out in Search.js and go to the onSubmit, and underneath the preventDefault and add

if this.state.text is equal to an empty string, we're gonna want to set an alert. So this.props with setAlert() that will take in two things, it takes in the text saying "Please enter something" and the type (danger for red, etc), add an else and move the rest of the code in the onsubmit up into the else.

it should look like this.

onSubmit = (e) => {
e.preventDefault();
if(this.state.text === '') {
this.props.setAlert('Please enter something', 'light');
} else {
this.props.searchUsers(this.state.text);
this.setState({text: ''});
}
};

143. And don't forget to add the propType above

144. And then in the App.js, we'll add the setAlert under showClear

setAlert={this.setAlert}

145. Add into the App.js state, alert:null

146. And go under clearUsers function and create the setAlert arrow function

setAlert = (msg, type) => {
this.setState({ alert: { msg, type } });
};

- now we have to get the alert to actually show, so lets make a new component

147. In the layout folder, make a Alert.js component , and this will be a functional component so type in racf

148. And in the Alert function, have it take in the alert object with the message and type

149. In the Alert function, get rid of the div, and instead type in if the alert is not equal to null, then we want to show a div with a className that will be undefined using backticks.

150. Now, the CSS has defined alert types already done, so what we want to do is....my head hurts trying to explain this, but heres the code

const Alert = ( {alert} ) => {
return (
alert !== null && (
<div className={`alert alert-${alert.type}`}>
<i className='fas fa-info-circle' /> {alert.msg}
</div>
)
);
};

151. So, now lets go back into the App.js and import the alert component

152. And in the return, we shall place it in the container above search component, and then we want to pass in a prop of whatever the alert is, in the state

<Alert alert={this.state.alert}/>

153. Now the alert won't go away, so we want to set a timeout so the alert will just dissapear

154. So in the setAlert arrow function, add a set timeout that will revert the state of the alert back to null, and set it for 5 seconds (5000)

setTimeout(() => this.setState({ alert: null }), 5000 )

-- Now Lets work on the React Router --

155. So now lets install npm react-router-dom, after its installed, we have to import it in our app.js files

156. So in App.js,

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

157. No to use the router we have to go down into our main return app. and we have to wrap everything in the Router

it should look like this

render() {
const { users, loading } = this.state;

    return (
      <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert}/>
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true: false }
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
      </Router>
    );

}
}

158. So what we have on the page now, that will be our home route. To do this

Under Alert, we will make a Switch, and in that Switch we will make a route, and then within the route, make a fragment, and then next the Search and Users components inside the Fragment

- Also make sure Fragment is imported under React, it should be imported in alongside Component.

159. Let do another Route, but to an About Component. So in the components folder, lets make a new folder called 'pages' and in that folder make a file called About.js

160. This About component will not have any state, so we will make it a functional component, so use racf

161. Inside the Div lets make a h1 and a few p's detailing the project

162. Import Fragment at the top, and change the div to a Fragment

163. Now lets create a route that will go to that component

164. So lets import the About.js Component into our App.js

165. And to create the route, lets go under our previosu route and add in

<Route exact path='/about' />

166. then save, and to confirm this indeed works, add /about to the rendered webpage

167. Now lets add a link in our navbar to that about page, so go into the Navbar component

- now we do not want to use a <a> tag to make these links. they will work, but they won't do the save the current user search. So we will use Link instead.

168. In Navbar.js, import { Link } from react-router-dom
