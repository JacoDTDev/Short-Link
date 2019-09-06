import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom'
import{Tracker} from "meteor/tracker";
import React from "react";

import{routes,onAuthChange} from "../imports/routes/routes";
import '../imports/startup/simple-schema-configuration.js';


Tracker.autorun(()=>{
   const isAuthenticated = !!Meteor.userId();
   onAuthChange(isAuthenticated);
});

//Stateless functional components
//dont have states but do have props
const MyComponent =(props) =>{
    return (
        <div>
            <h1>MyComponent is here!{props.name}</h1>
        </div>
    );
};

Meteor.startup(() => {
  // code to run on client at startup
    ReactDOM.render(<MyComponent name='Tom'/>, document.getElementById('app'));
});
