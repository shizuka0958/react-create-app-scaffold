import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import Login from '../src/components/Login'
import {BrowserRouter, HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/login" exact component={Login} />    
            <Route path="/"  component={App} />
        </Switch>
    </BrowserRouter>

    , document.getElementById('container')
);

