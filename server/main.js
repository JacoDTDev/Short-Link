import { Meteor } from 'meteor/meteor';
import {WebApp} from 'meteor/webapp';
import moment from 'moment';

import'../imports/api/users';
import {Links} from '../imports/api/links';
import '../imports/startup/simple-schema-configuration.js';

Meteor.startup(() => {
  // code to run on server at startup
    let now = new Date();
    console.log(now);
    //Jan 4th, 2019
    let monentNow = moment(0);
    console.log(monentNow.format('MMM Do,YYYY'));
    //1:15pm
    console.log(monentNow.format('H:mm a'));
    //in words
    console.log(monentNow.fromNow());
    WebApp.connectHandlers.use((req, res, next)=>{
        const _id = req.url.slice(1);
        const link = Links.findOne({_id});

        if(link){
            //if link is found
             res.statusCode= 302;
             res.setHeader('location',link.url);
             res.end();
             Meteor.call('links.trackVisit',_id)//to track visit
        }else{
            next();
        }
    });
});
