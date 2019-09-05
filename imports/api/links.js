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
    greetUser(name){
        console.log('greetUser is running');

        if(!name){
            throw new Meteor.Error('invalid-argument','Name is required');
        }
        return `Hello ${name}`;
    },
    addNumbers(a,b){
        if(typeof a !=='number' || typeof b !=='number') {
            throw new Meteor.Error('invalid-type', 'Number must be entered');
        }
       return (a+b);
    }

});