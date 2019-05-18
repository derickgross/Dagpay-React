import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import BeneficiariesIndex from './components/BeneficiariesIndex/BeneficiariesIndex'
import CreateEmployee from './components/CreateEmployee/CreateEmployee'
import CreateDependent from './components/CreateDependent/CreateDependent'

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			currentView: "Beneficiaries",
			employees: []
		}

		this.handleClick = this.handleClick.bind(this);
		this.setCurrentView = this.setCurrentView.bind(this);
		this.displayCurrentView = this.displayCurrentView.bind(this);
	}

	handleClick(event) {
		event.preventDefault();
		console.log('Click event handled! event.target.href: ' + event.target.dataset.view);

		const newView = event.target.dataset.view;

		this.setCurrentView(newView);

		this.displayCurrentView();
	}

	async setCurrentView(view) {
		await this.setState(prevState => {
			return { currentView: view }
		});
	}

	displayCurrentView() {
		switch (this.state.currentView) {
			case "BeneficiariesIndex":
				return <BeneficiariesIndex employees={this.state.employees}/>
			case "CreateEmployee":
				return <CreateEmployee />
			case "CreateDependent":
				return <CreateDependent />
			default:
				return <BeneficiariesIndex employees={this.state.employees}/>
		}
	}

	render() {
		const navbarProps = {
			handleClick: this.handleClick
		}

		return (
			<div className="App">
				<Header navbar={navbarProps}/>
				<Main currentView={this.displayCurrentView}/>
				<Footer />
			</div>
		)
	}
}

export default App;
