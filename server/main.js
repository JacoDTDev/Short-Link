import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

Meteor.startup(() => {
  // code to run on server at startup
    const petSchema = new SimpleSchema({
        name:{
            type: String,
            min:1,
            max:200
        },
        age:{
            type:Number,
            min:0,
            optional:true
        },
        contactNumber:{
            type:String,
            optional: true,
            regEx:SimpleSchema.RegEx.Phone
        }
    });
    petSchema.validate({
        name:'Tom',
        age:5,
        contactNumber: '1234' //a1234 will fail
    });
    const employeeSchema = new SimpleSchema({
        name:{
            type:String,
            min:1,
            max:200
        },
        hourlyWage:{
            type: Number,
            min:0
        },
        email:{
            type: String,
            regEx: SimpleSchema.RegEx.Email
        }
    });
    employeeSchema.validate({
            name:'Ben',
            hourlyWage:5,
            email: 'j@gmail.com'
    });
});
