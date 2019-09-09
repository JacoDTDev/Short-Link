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
            userId:this.userId,
            visible: true
        });
    },
    'links.setVisibility'(_id,visible){
        //check if user is logged in. Throw an error if not
        if(!this.userId){
            throw new Meteor.Error('not-authorized');
        }
        //check that_id is a string with length greater than 1
        //visible is a boolean
        new SimpleSchema({
            _id:{
                type:String,
                min:1
            },
            visible:{
                type: Boolean,
            }
        }).validate({_id,visible});

        //link.update - where _id and this.userId match the doc
        //Set the visible property to the visible argument
        Links.update({
            _id,
            userId: this.userId
        },{
            $set:{visible:visible}
        });

    }
});