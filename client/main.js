import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom'
import{Tracker} from "meteor/tracker";

import{routes,onAuthChange} from "../imports/routes/routes";


Tracker.autorun(()=>{
   const isAuthenticated = !!Meteor.userId();
   onAuthChange(isAuthenticated);
});

Meteor.startup(() => {
  // code to run on client at startup
    Meteor.call('greetUser','Jaco',(err,res)=>{
        console.log('Greet user Arument',err,res);
    });
   Meteor.call('addNumbers',6,5,(err,res)=>{
       console.log('Greet user Arument',err,res);
   });
    ReactDOM.render(routes, document.getElementById('app'));
});
