# Topics to Cover
This is a list of topics that will be covered in today's lecture.

## HashRouter
- HashHistory vs BrowserHistory
- BrowserRouter - configure your server to avoid breaking all the things

## Route
- path='/' url path for the component 
- Exact - will match path exactly 
- Component - set it equal to the component you want rendered
- Render
  - takes in a function
  - Nested routes with props.children

## Switch
- loads only one route at a time
- it will load the first match to the path url
  - be careful about order

## Link
- to='/'
- links to the url

## NavLink
- awesome
- you can use activeClassName='', class will display on nav when active

## Using a router file
- not necessary for function, good for organization
- make sure to wrap <HashRouter> around the app component tag in index.js

## Params
- access value through props.match.params
- set the property name on the params object with the path url
  - path='/product/:id' >>> Colon is the key!

