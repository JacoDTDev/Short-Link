import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom'
import {Router,Route,browserHistory} from "react-router";
import{Tracker} from "meteor/tracker";

import Signup from "../imports/ui/Signup";
import Link from "../imports/ui/Link";
import Login from "../imports/ui/Login";
import NotFound from "../imports/ui/NotFound";

//pages we access if not authenticated
const unauthenticatedPages =['/','/signup'];
//pages we want to access if authenticated
const authenticatedPages=['/links'];
const onEnterPublicPage = ()=>{
    //check if user is already logged in
    if(Meteor.userId()){
        browserHistory.replace('/links');
    }
};
const onEnterPrivatePage=()=>{
    if(!Meteor.userId()){
        browserHistory.replace('/');
    }
};
const routes=(
    <Router history={browserHistory}>
        <Route path='/' component={Login} onEnter={onEnterPublicPage}/>
        <Route path='/signup' component={Signup} onEnter={onEnterPublicPage}/>
        <Route path='/links' component={Link} onEnter={onEnterPrivatePage} />
        <Route path='*' component={NotFound}/>
    </Router>
);
//window.browserHistory = browserHistory;
Tracker.autorun(()=>{
   const isAuthenticated = !!Meteor.userId();
   const pathname =browserHistory.getCurrentLocation().pathname;
   //so here we check if the current page is in the array for UnauthenticatedPages
   const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
   const isAuthenticatedPage = authenticatedPages.includes(pathname);
   if(isUnauthenticatedPage && isAuthenticated){
       browserHistory.replace('/links');
   }else if(isAuthenticatedPage && !isAuthenticated){
       browserHistory.replace('/');
   }
});

Meteor.startup(() => {
  // code to run on client at startup
    ReactDOM.render(routes, document.getElementById('app'));
});
