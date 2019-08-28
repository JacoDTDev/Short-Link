import React from 'react';
import {Link} from "react-router";

export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
          error:''
        };
    }
    onSubmit(e){
        e.preventDefault();

        this.setState({
            error: 'Something went wrong.'
        })
    }
    render() {
        return <div>
        <h1>Signup Page</h1>
            {this.state.error? <p>{this.state.error}</p>:undefined}
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="text" name="email" placeholder="Email here"/>
                <input type="password" name="password" placeholder="Password here"/>
                <button>Create Account</button>
            </form>
            <p>
                <Link to="/">Already have an account.</Link>
            </p>
        </div>
    }
}