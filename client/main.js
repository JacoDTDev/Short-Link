import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom'
import{Tracker} from "meteor/tracker";

import{routes,onAuthChange} from "../imports/routes/routes";
import{Links} from "../imports/api/links";

Tracker.autorun(()=>{
   const isAuthenticated = !!Meteor.userId();
   onAuthChange(isAuthenticated);
});

Tracker.autorun(()=>{
    const links = Links.find().fetch();
    console.log('new links',Links);
});

Meteor.startup(() => {
  // code to run on client at startup
    ReactDOM.render(routes, document.getElementById('app'));
});
