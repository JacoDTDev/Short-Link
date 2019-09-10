import React from "react";
import Modal from 'react-modal';
import {Meteor} from "meteor/meteor";

export default class AddLink extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            url:'',
            isOpen: false,
            error:''
        };
    }
    onFormSubmit(e){
        const {url} =this.state;

        e.preventDefault();

        Meteor.call('links.insert',url,(err,res)=>{
            if(!err){
                this.handleModalClose.bind()
            }else{
                this.setState({error: err.reason});
            }
        });
    }

    onFormChange(e){
        this.setState({
            url:e.target.value.trim()
        });
    }
    //to handel closing the model, using not repeating code
    handleModalClose(){
        this.setState({
            isOpen:false,
            url:'',
            error:''
        });
    }
    render(){
        return(
            <dev>
                <button onClick={()=>{this.setState({isOpen:true})}}>+ Add Link</button>
                <Modal
                    isOpen={this.state.isOpen}
                    contentLabel="Add Link"
                    onAfterOpen={()=>{this.refs.url.focus()}}
                    onRequestClose={this.handleModalClose.bind(this)}>
                    <h1>Add Link</h1>
                    {this.state.error ? <p>this.state.error</p>:undefined}
                    <form onSubmit={this.onFormSubmit.bind(this)}>
                        <input
                            type="text"
                            placeholder="URL"
                            ref="url"
                            value={this.state.url}
                            onChange={this.onFormChange.bind(this)}
                        />
                        <button>Add Link</button>
                    </form>
                    <button onClick={this.handleModalClose.bind(this)}>Cancel</button>
                </Modal>
            </dev>
        );
    }
}

