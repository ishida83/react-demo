import React from 'react';
import { IndexRoute, Router, Route, hashHistory }  from 'react-router';
import App from './App';
import Home from './Home';
import Sub from './Sub';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path='sub' component={Sub} />
        </Route>
    </Router>
);