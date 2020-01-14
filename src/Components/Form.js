import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {
		super(props)
		this.state = {
			 username:'',
			 comments:'',
			 topic:'react'

		}
	}
	handleUsernameChange=(event) => {
		this.setState({ 
			username:event.target.value
		})
	}
	handleCommentsChange=(event) =>  {
		this.setState({
			comments:event.target.value
		})
	}
	handleTopicsChange=(event) =>  {
		this.setState({
			topics:event.target.value
		})
	}
	handleSubmit= event =>  {
		alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`)
		event.preventDefault()
	}
	render() {
		const {username, comments, topics} = this.state //destructing this.state
		return (
			<form onSubmit={this.handleSubmit}>
			<div>
				<label>User Name:</label>
				<input
				type="text"
				value={username}
				onChange={this.handleUsernameChange}
				/>
			</div>
			<div>
			<label>comment:</label>
			<textarea
			value={comments}
			onChange={this.handleCommentsChange}
			/>
			</div>
			<label>Topic:</label>
			<select value={topics} onChange={this.handleTopicsChange}>
			<option value="react">React</option>
			<option value="angular">Angular</option>
			<option value="vue">Vue</option>
			</select>
			<div>
			<button type="submit">Submit</button>
			</div>
			</form>
		)
	}
}

export default Form