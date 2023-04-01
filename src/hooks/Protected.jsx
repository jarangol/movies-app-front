
import React from 'react';
import { Route } from 'react-router-dom';

const GuardedRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth === true
            ? <Component {...props} />
            : <Route path='/' />
    )} />
)

export default GuardedRoute;