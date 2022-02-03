import React from 'react'
import Main from './components/main';
import Review from './components/review';
import {Link, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path='/'>
        <Main></Main>
      </Route>
      <Route path='/review'>
        <Review></Review>
      </Route>
    </div>
  );
}

export default App;
