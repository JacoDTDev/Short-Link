import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

import {Links} from "../api/links";
import LinksList from "./LinksList";

export default class Link extends React.Component{
    onLogout(){
    Accounts.logout();
    }
    onFormSubmit(e){
        const url = this.refs.url.value.trim();

        e.preventDefault();

        if(url){
         // not used anymore, use method instead   Links.insert({url, userId: Meteor.userId()});
            Meteor.call('links.insert',url); //we dont always have to add a callback method like shown here
            //to clear
            this.ref.url.value='';
        }
    }
    render() {
        return <div>
            <h1>Links Page</h1>
            <button onClick={this.onLogout.bind(this)}>Logout</button>
            <LinksList/>
            <p>Add Link</p>
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <input type="text" ref="url" placeholder="URL here"/>
                <button>Add Link</button>
            </form>
        </div>
    }
}