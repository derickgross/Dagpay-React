import React from 'react'

const Main = (props) => {
	return (
		<div>
			<section>
				<h2>Total Deductions</h2>
				<p className="money">${props.totalDeductions}</p>
			</section>
			{props.currentView()}
		</div>
	)
}

export default Main