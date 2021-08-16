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
