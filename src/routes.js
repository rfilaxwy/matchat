import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Components
import Calendar from './component/Calendar'
import Dashboard from './component/Dashboard'
import Landing from './component/Landing'
import Login from './component/Login'
import Register from './component/Register'
import Search from './component/Search'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route component={Dashboard} path='/dashboard' />
        <Route component={Search} path='/search' />
        <Route component={Calendar} path='/calendar' />
    </Switch>
)