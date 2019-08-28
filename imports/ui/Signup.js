import React from 'react';
import {Link} from "react-router";

export default class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
          count:0
        };
    }
    increment(){
        this.setState({
            count: this.state.count+1
        });
    }
    render() {
        return <div>
        <h1>Signup Page</h1>
            {this.state.count}
            <p><button onClick={this.increment.bind(this)}>+1</button><button onClick={()=>this.setState({count: this.state.count-1}).bind(this)}>-1</button></p>
            <p>
                <Link to="/">Already have an account.</Link>
            </p>
        </div>
    }
}