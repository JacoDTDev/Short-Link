import { Meteor } from 'meteor/meteor';
import {WebApp} from 'meteor/webapp';

import'../imports/api/users';
import '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  // code to run on server at startup
  WebApp.connectHandlers.use((req,res, next)=>{
      console.log('This is from my custom middleware');
      console.log(req.url, req.method, req.headers, req.query);
      //set HTTP status code
      res.statuseCode =404;
      //Set HTTP headers
      res.setHeader('my-custom-header','Andrew was here!');
      //Set HTTP body
      res.write('<h1>This is my middleware at work!</h1>');
      //End HTTP request
      res.end();
      next();
  });
});
