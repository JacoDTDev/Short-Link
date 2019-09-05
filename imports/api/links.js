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
    greetUser(name='user'){
        console.log('greetUser is running');
        return 'Hello ${name}';
    }

});