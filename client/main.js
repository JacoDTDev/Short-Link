import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom'
import{Tracker} from "meteor/tracker";
import React from "react";
import {Session} from "meteor/session";

import{routes,onAuthChange} from "../imports/routes/routes";
import '../imports/startup/simple-schema-configuration.js';

Tracker.autorun(()=>{
   const isAuthenticated = !!Meteor.userId();
   onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  // code to run on client at startup
    Session.set('showVisible',true);//set showVisible default to true
    ReactDOM.render(routes, document.getElementById('app'));
});
