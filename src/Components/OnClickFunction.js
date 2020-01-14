import React from 'react'

function OnClickFunction() {
	function clickHandler()	{
		console.log('Onclick event function handler is triggered')
	}
	return (
		<div>
			<button onClick={clickHandler}>ClickFunction</button>
		</div>
	)
}

export default OnClickFunction