import React from "react";
import Modal from 'react-modal';
import {Meteor} from "meteor/meteor";

export default class AddLink extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url:'',
            isOpen: false
        };
    }
    onFormSubmit(e){
        //const url = this.state.url; //same as bottom statement
        const {url} =this.state;
        e.preventDefault();

        if(url){
            // not used anymore, use method instead   Links.insert({url, userId: Meteor.userId()});
            Meteor.call('links.insert',url,(err,res)=>{
                if(!err){
                    this.setState({url:'', isOpen: false});
                }
            });
            //to clear

        }
    }

    onFormChange(e){
        this.setState({
            url:e.target.value.trim()
        });
    }
    render(){
        return(
            <dev>
                <button onClick={()=>{this.setState({isOpen:true})}}>+ Add Link</button>
                <Modal isOpen={this.state.isOpen} contentLabel="Add Link">
                    <p>Add Link</p>
                    <form onSubmit={this.onFormSubmit.bind(this)}>
                        <input
                            type="text"
                            placeholder="URL"
                            value={this.state.url}
                            onChange={this.onFormChange.bind(this)}
                        />
                        <button>Add Link</button>
                    </form>
                    <button onClick={()=>{this.setState({isOpen:false, url:''})}}>Cancel</button>
                </Modal>
            </dev>
        );
    }
}

