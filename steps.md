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
17. Now to use the prop, we have to inset it using curley brackets. So in that h1 tag right after   the icon tag, add {this.props.title}
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
  };
26. With this in place, its telling the page to expect a string. So if we try to manually pass in a number value, it will still work, but we will get an error warning in the console.log that it expected a string
27. In that static prop types, if we pass in an Array instead of a string, it will work without error

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
35. So all that data is now defined in our state. 
// left off at 4:22


