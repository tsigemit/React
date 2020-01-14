import React from 'react'

function ChildComponent(props) {
	return (
		<div>
			<button onClick={() => props.name('Child')}> Greet Parents </button>
		</div>
	)
}

export default ChildComponent