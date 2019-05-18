import React from 'react'

const Main = (props) => {
	return (
		<div>
			<h2>Main Content</h2>
			{props.currentView()}
		</div>
	)
}

export default Main