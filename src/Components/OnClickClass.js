import React from 'react'

export class OnClickClass extends React.Component {
	clickHandler(){
		console.log("Onclick class event handler is triggered")
	}
	render() {
		return (
			<div>
			 <button onClick={this.clickHandler}>OnClickClass</button>
			</div>
		)
	}
}

export default OnClickClass