import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Main from './components/Main/Main'
import BeneficiariesIndex from './components/BeneficiariesIndex/BeneficiariesIndex'
import CreateEmployee from './components/CreateEmployee/CreateEmployee'
import CreateDependent from './components/CreateDependent/CreateDependent'

const baseURL = 'https://dagpay2.azurewebsites.net/api';

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
		this.fetchEmployeesAndDependents = this.fetchEmployeesAndDependents.bind(this);
		this.addEmployee = this.addEmployee.bind(this);
		this.addDependent = this.addDependent.bind(this);
	}

	componentDidMount() {
		this.fetchEmployeesAndDependents();
	}

	fetchEmployeesAndDependents() {
		fetch(`${baseURL}/GetEmployeesAndDependents`, {
			method: 'GET'
		})
		.then(response => {
			response.json()
			.then(data => {
				this.setState(prevState => {
					return { employees: data }
				})
			})
			.catch(error => console.log('Processing JSON failed: ', error))
		})
		.catch(error => console.log('Something went wrong: ', error));
	}

	addEmployee() {

	}

	addDependent() {

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
				return <CreateDependent employeeSelectOptions={this.state.employees}/>
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
