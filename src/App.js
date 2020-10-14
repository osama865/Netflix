import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link,
} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import * as Pages from './pages';

function App() {
  const { user } = useAuthListener();
  console.log(user);
  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Pages.SIGN_IN />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <Pages.SIGN_UP />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Pages.BROWSE />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
        >
          <Pages.HOME />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
