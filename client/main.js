import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom'
import Signup from "../imports/ui/Signup";
import Link from "../imports/ui/Link";
import Login from "../imports/ui/Login";
import NotFound from "../imports/ui/NotFound";

Meteor.startup(() => {
  // code to run on client at startup
    ReactDOM.render(<Signup/>,document.getElementById('app'));
});
