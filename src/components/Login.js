import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h3>login</h3>
                <button onClick={()=>{this.props.history.push('/user')}}>login</button>
            </div>
        );
    }
}

export default Login;