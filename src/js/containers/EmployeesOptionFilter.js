/**
 * Created by Serhiy on 20.03.18.
 */
import React, { Component } from 'react';

import ControlInputView from './../components/ControlInputView';
import DropDownFilterListView from './../containers/DropDownFilterListView';

import './../../css/ControlsStyles.css';

class EmployeesOptionFilter extends Component {
	constructor(props) {
		super(props);

		this.roleOptions = this.props.roleOptions;

		this.changeNameFilter = this.changeNameFilter.bind(this);
		this.changeRoleFilter = this.changeRoleFilter.bind(this);
		this.resetRoleFilter = this.resetRoleFilter.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.roleOptions = nextProps.roleOptions;
	}

	render() {
		return (
			<div className="employee-option_filter">
				<ControlInputView inputChangeCallback={this.changeNameFilter} controlLabel="Filter by Name"/>
				<DropDownFilterListView selectFilter={this.changeRoleFilter} controlLabel="Filter by Role"
										resetFilter={this.resetRoleFilter}
										optionList={this.getRoleOptions()}
										uniqueId="role-option-list"/>
			</div>
		);
	}

	changeNameFilter(e) {
		var newData = e.currentTarget.value;

		this.props.applyFilter({
			type: 'NAME',
			filter: newData
		});
	}

	changeRoleFilter(e) {
		var newData = e.currentTarget.text;

		this.props.applyFilter({
			type: 'ROLE',
			filter: newData
		});
	}

	resetRoleFilter() {
		this.props.applyFilter({
			type: 'ROLE',
			filter: ''
		});
	}

	getRoleOptions() {
		return this.roleOptions;
	}
}

export default EmployeesOptionFilter;

