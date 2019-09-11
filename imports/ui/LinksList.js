import React from 'react';
import {Tracker} from "meteor/tracker";
import {Links} from "../api/links";
import LinksListItem from './LinksListItem';
import{Session} from 'meteor/session';

export default class LinksList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            links:[]
        };
    }
    componentDidMount() {
        console.log('componentDidMount LinksList')
        this.linksTracker = Tracker.autorun(()=>{
            Meteor.subscribe('links');
            //the enquiry that shows the list to screen
            const links = Links.find({
                visible: Session.get('showVisible')
            }).fetch();
            this.setState({links});
        });
    }
    componentWillUnmount() {
        console.log('componentWillUnmount LinksList')
        this.linksTracker.stop();
    }
    renderLinksListItems(){
        if(this.state.links.length===0){
            return <div className='item'>
                <p className='item__status-message'>
                    No Links Found
                </p>
            </div>
        }

        return this.state.links.map((link)=>{
            const shortUrl = Meteor.absoluteUrl(link._id);
            return <LinksListItem key={link._id} shortUrl={shortUrl}{...link}/>;
        })
    }
    render() {
        return(
           <div>
               <div>
                   {this.renderLinksListItems()}
               </div>
           </div>
        );
    }
};