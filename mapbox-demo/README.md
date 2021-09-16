This was the tutorial I followed

https://www.youtube.com/watch?v=JJatzkPcmoI

Still getting erros with the API key not working

1. So, to start with this project, I will create the react broiler plate, and then download one dependency

npm install react-map-gl

2. Then from the tutorial I took a JSON of data regarding skateboard parks. I copy and pasted that from the source code.

3. In the main App.js file, I will import ReactMapGL at the top, and then in the return of the main function app, within the div, create the component directly in the app.js

function App() {
return (

<div>
<ReactMapGL>
markers here
</ReactMapGL>
</div>
);
}

4. Now we will use the useState hook so lets import it at the top, and we will set the useState to viewport and setViewport
   this is out default state of data of where the map will take us to by default and how it presents itself in the browse.

const [viewport, setViewport] = useState({
latitude: 45.4211,
longitude: -75.6903,
width: '100vw',
height: '100vh',
zoom: 10,
});

5. Now we need to get a Map Box Token and then store it in an .env file
   REACT_APP_MAPBOX_TOKEN="{API key}"

(Env/enviromental variables need to be in this format, uppercase and underscore)
