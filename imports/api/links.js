import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import SimpleSchema from "simpl-schema";
import shortid from 'shortid';

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

        new SimpleSchema({
                url:{
                    type: String,
                    label:'Your link',
                    regEx: SimpleSchema.RegEx.Url
                }
        }).validate({ url });

        Links.insert({
            _id: shortid.generate(),
            url,
            userId:this.userId
        });
    }
});