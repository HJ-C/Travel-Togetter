import React from 'react'
import Main from './components/main';
import Review from './components/review';
import {Link, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Main></Main>
      </Route>

      <Switch>

        <Route path="/review">
          <Review></Review>
        </Route>
        <Route path='/:id'> 
          <div>잘못된 주소입니다.</div>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
