import React, { Component } from 'react';

import EmployeeList from './js/containers/EmployeeList';
import Filter from './js/containers/Filter';

// import RequestService from './js/services/RequestService';
// import ServiceSettings from './js/services/ServiceSettings';

import file from './fakeData.json';

import './css/App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.loadedData = [];

		this.state = {
			employyeListData:[],
			roleOptionsList :[]
		};

		this.applyFilter = this.applyFilter.bind(this);
	}

	componentDidMount() {
		var data = file.employes; //RequestService.loadData(ServiceSettings.EMPLOYERS_LIST_LINK);
		var roleOptions = this.getUniqueRoles(data);

		this.loadedData = this.checkCompanyLogo(data);

		this.setState({
			employyeListData: this.loadedData,
			roleOptionsList : roleOptions
		});
	}
	
	render() {
		return (
			<div className="App">
				<Filter roleOptions={this.state.roleOptionsList} applyFilter={this.applyFilter} />
				<EmployeeList employyeListData={this.state.employyeListData} />
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
				employyeListData: filteredList,
				roleOptionsList : roleOptionsList
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
		var obj = {};
		var arr = [];

		if (array.length) {
			// const map = array.map(i => i.role)
			// 		.reduce((map, item) => { map[item] = true; }, {});
			
			arr = array.filter((item) => {
				if (!obj.hasOwnProperty(item.role)) {
					obj[item.role] = true;
					return true;
				}

				return false;
			});

			return arr;
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
}

export default App;
