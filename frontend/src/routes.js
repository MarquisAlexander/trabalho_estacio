import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Logon from './pages/Logon';
import Register from './pages/Register';
import NewTask from './pages//NewTask';
import Profile from './pages/Profile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/newtask" component={NewTask} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    )
}