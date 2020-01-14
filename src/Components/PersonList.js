import React from 'react'

function PersonList() {
	const names=['Tsigabu','Mebrahtu','Birhanu']
	const namelist = names.map(name => <h2>{name}</h2>)
	const persons=[{id:1, 
		          fname:"Tsigabu", 
		          lname:'Birhanu'},
		          {id:2,
		          	fname:'Mieraf',
		          	lname:'Gebre'
		          }
		          	]
	const personList = persons.map(person => <h2 style={{color: 'green'}}> I am {person.fname} {person.lname}</h2>)
	return (<div> 
	         {namelist}
	         {personList}
	       </div>
	     )
}

export default PersonList