import React from 'react';
import {Session} from 'meteor/session';
import {Tracker} from 'meteor/tracker';
import {Meteor} from "meteor/meteor";

export default class LinkedListFilers extends React.Component{
    constructor(pops){
        super(pops);
        this.state ={
            showVisible: true
        };
    }
    componentDidMount() {
        this.tracker = Tracker.autorun(()=>{
            const showVisible = Session.get('showVisible');
            this.setState({
                showVisible
            })
        })
    }
    componentWillUnmount() {
        this.tracker.stop();
    }

    render() {
        return(
            <div>
                <lable>
                    <input type='checkbox' checked={!this.state.showVisible} onChange={(e)=>{
                        console.log(e.target.checked);
                        Session.set('showVisible',!e.target.checked);
                    }}/>
                    show hidden links
                </lable>
            </div>
        );
    }
}
