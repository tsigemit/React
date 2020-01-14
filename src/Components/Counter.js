import React from 'react'

export class Counter extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			counter:0
		}
	}
	incrementCounter(){
		this.setState((prevState) => ({
			counter: prevState.counter+1
		}))
	}
	decrementCounter(){
		this.setState((prevState) => ({
			counter: prevState.counter-1
		}))
	}
	render() {
		return (
			<div>
				<h1>count - {this.state.counter}</h1>
				<button onClick={() => this.incrementCounter()}>Increment</button>
				<button onClick={() => this.decrementCounter()}>Decrement</button>
			</div>
		)
	}
}

export default Counter