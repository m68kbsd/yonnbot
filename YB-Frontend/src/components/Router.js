import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Home from './Home/Home';
import Container from './Container/Container';
import Comment from './Comment/Comment';
import AuthRequired from './Auth/AuthRequired';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Submit from './Submit/Submit';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Container}>

      <IndexRoute component={Home} />

      <Route path="/post/:postId/:title" component={Comment} />
      <Route path="/register" component={Register} />
      <Route path="/logout" component={Logout} />

      <Route component={AuthRequired} >
        <Route path="/submit" component={Submit} />
      </Route>

    </Route>
  </Router>
);

export default Routes;