import React, { Component } from 'react';
import User from './components/User';
import Product from './components/Product';

import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';

class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1> 这是主页面 </h1>
                <ul>
                    <li><Link to="/user">user link</Link></li>
                    <li><Link to="/product">product link</Link></li>
                </ul>
                <div>
                    <Switch>
                        <Route path="/user" component={User} />
                        <Route path="/product" component={Product} />
                        <Redirect to="/user" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;
