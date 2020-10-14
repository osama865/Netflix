import React from 'react';
import { BrowserRouter as Router , Route, Switch, NavLink, Link } from 'react-router-dom'
import * as ROUTES from './constants/routes';


import * as Pages  from './pages';


function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}  >
        <Pages.HOME/>
      </Route>

      <Route exact path={ROUTES.SIGN_IN}  >
        <Pages.SIGN_IN/>
      </Route>

      <Route exact path={ROUTES.SIGN_UP}  >
        <Pages.SIGN_UP/>
      </Route>

      <Route exact path={ROUTES.BROWSE}  >
        <Pages.BROWSE/>
      </Route>
    </Router>


    
  );
}

export default App;
