import React from 'react'

export class EventBind extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			message:"Hello"
		}
		this.clickHandler=this.clickHandler.bind(this);
	}
	clickHandler(){
		this.setState({
			message:"GoodBye"
		})
	}
	render() {
		return (
			<div>
				{this.state.message}
				<button onClick={this.clickHandler}>Click Me</button>
			</div>
		)
	}
}

export default EventBind