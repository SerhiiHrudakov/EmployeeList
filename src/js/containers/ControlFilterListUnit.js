/**
 * Created by Serhiy on 20.03.18.
 */
import React, { Component } from 'react';

import OptionListUnit from './../components/OptionListUnit';

class ControlFilterListUnit extends Component {
	constructor(props) {
		super(props);

		this.optionList = this.props.optionList;

		this.state = {
			filteredOptionList: this.props.optionList,
			listFilter        : '',
			listStateClassName: 'closed'
		};

		this.filterOptionInputChange = this.filterOptionInputChange.bind(this);
		this.resetListOptionFilter = this.resetListOptionFilter.bind(this);
		this.openDropDownList = this.openDropDownList.bind(this);
		this.closeDropDownList = this.closeDropDownList.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.optionList = nextProps.optionList;

		this.setState({
			filteredOptionList: this.optionList
		})
	}

	render() {
		return (
			<div className="control_dropdown-list-unit">
				<input className="dropdown_option-filter_input" id={this.props.uniqId} type="text" placeholder="Search.."
				       onChange={this.filterOptionInputChange}
				       onClick={this.openDropDownList}
				       onBlur={this.closeDropDownList}/>
				<button className="dropdown_reset-option-filter" value="resetBtn" onClick={this.resetListOptionFilter}>Reset options filter</button>
				<OptionListUnit listState={this.state.listStateClassName} optionList={this.state.filteredOptionList} selectListItemCallback={this.props.selectOptionCallback}/>
			</div>
		);
	}

	filterOptionInputChange(e) {
		var filter = e.currentTarget.value;
		var filteredOptionList = this.optionList.filter((item) => {
			return item.role.includes(filter);
		});

		this.setState({
			filteredOptionList: filteredOptionList
		});
	}

	resetListOptionFilter(e) {
		document.getElementById(this.props.uniqId).value = '';

		this.props.resetFilter(e);
	}

	openDropDownList() {
		this.setState({
			listStateClassName: 'open'
		});
	}
	
	closeDropDownList() {
		this.setState({
			listStateClassName: 'closed'
		});
	}
}

export default ControlFilterListUnit;
