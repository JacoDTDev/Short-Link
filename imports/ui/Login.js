import React from 'react';
import {Link} from "react-router";

export default class Login extends React.Component{
    render() {
        return (<div>
            <h1>Login to Short lnk</h1>
            <p>
                <Link to="/signup">Have an account?</Link>
            </p>

        </div>);
    }
}