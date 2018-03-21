/**
 * Created by Serhiy on 20.03.18.
 */
import React, { Component } from 'react';

import ControlInputUnit from './../components/ControlInputUnit';
import ControlFilterListUnit from './../containers/ControlFilterListUnit';

import './../../css/Filter.css';

class Filter extends Component {
	constructor(props) {
		super(props);

		this.defaultRoleLabel = 'Select role';
		this.roleOptions = this.props.roleOptions;

		this.state = {
			roleLabel : this.defaultRoleLabel
		};

		this.changeInputFilter = this.changeInputFilter.bind(this);
		this.changeOptionListFilter = this.changeOptionListFilter.bind(this);
		this.resetOptionListFilter = this.resetOptionListFilter.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.roleOptions = nextProps.roleOptions;
	}

	render() {
		return (
			<div className="employee-filter">
				<ControlInputUnit inputChangeCallback={this.changeInputFilter} unitLabel="Filter by Name"/>
				<ControlFilterListUnit selectOptionCallback={this.changeOptionListFilter} unitLabel={this.state.roleLabel}
										resetFilter={this.resetOptionListFilter}
										optionList={this.getRoleOptions()}
										uniqId="role-option-list"/>
			</div>
		);
	}

	changeInputFilter(e) {
		var newData = e.currentTarget.value;

		this.props.applyFilter({
			type: 'NAME',
			filter: newData
		});
	}

	changeOptionListFilter(e) {
		var newData = e.currentTarget.text;

		this.props.applyFilter({
			type: 'ROLE',
			filter: newData
		});
	}
	
	resetOptionListFilter() {
		this.props.applyFilter({
			type: 'ROLE',
			filter: ''
		});
	}

	getRoleOptions() {
		return this.roleOptions;
	}
}

export default Filter;

