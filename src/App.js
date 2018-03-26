import React, { Component } from 'react';

import { connect } from 'react-redux'
import { fetchData } from './js/services/redux/actions';

import EmployeesList from './js/containers/EmployeesList';
import EmployeesOptionFilter from './js/containers/EmployeesOptionFilter';

import RequestService from './js/services/RequestService';
import Settings from './js/services/Settings';

import './css/App.css';
import './css/common.css';

function mapStateToProps (state) {
	return {
		appData: state.appData
	}
}

function mapDispatchToProps (dispatch) {
	return {
		fetchData: () => dispatch(fetchData())
	}
}

class App extends Component {
	constructor(props) {
		super(props);

		this.loadedData = [];

		this.state = {
			employeesListData:[],
			roleOptionsList  :[]
		};

		this.applyFilter = this.applyFilter.bind(this);
		this.openBioInfoScreen = this.openBioInfoScreen.bind(this);
	}

	componentDidMount() {
		RequestService.loadData(Settings.EMPLOYERS_LIST_LINK, (data) => {
			if (data && data.employees) {
				var roleOptions = this.getUniqueRoles(data.employees);

				this.loadedData = this.checkCompanyLogo(data.employees);

				this.setState({
					employeesListData: this.loadedData,
					roleOptionsList  : roleOptions
				});
			}
		});
	}

	render() {
		return (
			<div className="App">
				<EmployeesOptionFilter roleOptions={this.state.roleOptionsList} applyFilter={this.applyFilter} />
				<EmployeesList employyeListData={this.state.employeesListData} openInfoScreenView={this.openBioInfoScreen}/>
			</div>
		);
	}

	applyFilter(filterParams) {
		var propName;
		var filteredList;
		var roleOptionsList;

		switch(filterParams.type) {
			case 'NAME':
				propName = 'name';
				
				break;
			case 'ROLE': propName = 'role'; break;
			default: propName = '';
		}

		if (propName.length) {
			if (filterParams.filter.length) {
				filteredList = this.getFilteredList(this.loadedData, filterParams.filter, propName);
			} else {
				filteredList = this.loadedData;
			}

			roleOptionsList = this.getUniqueRoles(filteredList);

			this.setState({
				employeesListData: filteredList,
				roleOptionsList  : roleOptionsList
			});
		}
		
		console.log('filter aplyed');
	}

	getFilteredList(array, filter, propName) {
		return array.filter((item) => {
			return item[propName].includes(filter);
		});
	}

	getUniqueRoles(array) {
		if (array.length) {
			const map = array.map(i => i.role)
					.reduce((map, item) => { map[item] = true; return map }, {});

			return Object.keys(map);
		}

		return [];
	}

	checkCompanyLogo(array) {
		return array.map((item) => {
			if (!item.hasOwnProperty('logo')) {
				item.logo = "img/logo.jpg";
			}

			return item;
		})
	}

	openBioInfoScreen(id) {
	
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
