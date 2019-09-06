import { Meteor } from 'meteor/meteor';
import {WebApp} from 'meteor/webapp';

import'../imports/api/users';
import {Links} from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  // code to run on server at startup
    //middle ware to take us to google.com
    //set HTTP status code to A 302
    //sET LOCATION HEADER TO HTTP:
    WebApp.connectHandlers.use((req, res, next)=>{
        const _id = req.url.slice(1);
        const link = Links.findOne({_id});

        if(link){
            //if link is found
             res.statusCode= 302;
             res.setHeader('location',link.url);
             res.end();

        }else{
            next()
        }
    });
});
