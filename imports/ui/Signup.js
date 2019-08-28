import React from 'react';
import {Link} from "react-router";

export default class Signup extends React.Component{
    render() {
        return <div>
        <h1>Signup Page</h1>
            <p>
                <Link to="/">Already have an account.</Link>
            </p>
        </div>
    }
}