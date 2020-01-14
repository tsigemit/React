import React, { Component } from 'react'
//import React from 'react';

class Message extends Component{
	constructor(){
		super()
		this.state = {
			message:"Welcome to visit"
		}
	}
	changeMessage(){
		this.setState({
			message: "Thanks for the invitation"
		})
	}
	render(){
		return (
			<div>
			<h1>{this.state.message}</h1>
			<button onClick={()=>this.changeMessage()}>Subscribe</button>
			</div>
			);
	}
}

export default Message;