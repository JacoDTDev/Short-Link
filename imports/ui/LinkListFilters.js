import React from 'react';
import {Session} from 'meteor/session';
import {Meteor} from "meteor/meteor";
//to create the check box
export default()=>{
    return(
        <div>
          <lable>
              <input type='checkbox' onChange={(e)=>{
                  console.log(e.target.checked);
                 Session.set('showVisible',!e.target.checked);
              }}/>
              show hidden links
          </lable>
        </div>
    );
};