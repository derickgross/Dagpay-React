import React from 'react'

const Main = (props) => {
	return (
		<main>
			<section>
				<h2>Total Deductions</h2>
				<p className="money">${props.totalDeductions}</p>
			</section>
			{props.currentView()}
		</main>
	)
}

export default Main