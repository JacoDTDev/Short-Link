import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const Links = new Mongo.Collection('links');
if(Meteor.isServer){
    Meteor.publish('links', function(){
      //  this.userId
        return Links.find({userId:this.userId});
    });
}
//to define meteor methods
Meteor.methods({
    'links.insert'(url){
        //check if users user is logged in
        if(!this.userId){
            throw new Meteor.Error('not-authorized');
        }
        Links.insert({
           url,
           userId:this.userId
        });
    }
});