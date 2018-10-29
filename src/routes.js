import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Components
import Calendar from './component/Calendar'
import Dashboard from './component/Dashboard'
import Landing from './component/Landing'
import Login from './component/Login'
import Nav from './component/Nav'
import Register from './component/Register'
import Search from './component/Search'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/nav' render={ () => (
            <Nav>
                <Switch>
                    <Route component={Dashboard} path='/nav/dashboard' />
                    <Route component={Search} path='/nav/search' />
                    <Route component={Calendar} path='/nav/calendar' />
                </Switch>
            </Nav>
         ) } />
    </Switch>
)