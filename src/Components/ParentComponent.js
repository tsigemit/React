import React from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends React.Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 parentName:'Parents'
		}
		this.greetParent = this.greetParent.bind(this)
	}
	greetParent(childName) {
		console.log("Check it");
		alert(`Hello ${this.state.parentName} from ${childName}`)
	}
	render() {
		return (
			<div>
				<ChildComponent name={this.greetParent}/>
			</div>
		)
	}
}

export default ParentComponent