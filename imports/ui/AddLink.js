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
                <button className='button' onClick={()=>{this.setState({isOpen:true})}}>+ Add Link</button>
                <Modal
                    isOpen={this.state.isOpen}
                    contentLabel="Add Link"
                    onAfterOpen={()=>{this.refs.url.focus()}}
                    onRequestClose={this.handleModalClose.bind(this)}
                    className ="boxed-view__box"
                    overlayClassName="boxed-view boxed-view--modal"
                     >
                    <h1>Add Link</h1>
                    {this.state.error ? <p>{this.state.error}</p>:undefined}
                    <form onSubmit={this.onFormSubmit.bind(this)} className='boxed-view__form'>
                        <input
                            type="text"
                            placeholder="URL"
                            ref="url"
                            value={this.state.url}
                            onChange={this.onFormChange.bind(this)}
                        />
                        <button className='button'>Add Link</button>
                        <button type='button' className='button button--secondary' onClick={this.handleModalClose.bind(this)}>Cancel</button>
                    </form>
                </Modal>
            </dev>
        );
    }
}

