/**
 * Created by Serhiy on 20.03.18.
 */
import React, { Component } from 'react';

import DropDownOptionListView from './../components/DropDownOptionListView';

import './../../css/DropdownListStyle.css';

class DropDownFilterListView extends Component {
	constructor(props) {
		super(props);

		this.optionList = this.props.optionList;

		this.state = {
			filteredOptionList     : this.props.optionList,
			dropDownOptionListState: 'closed'
		};

		this.resetDropDownOptionList = this.resetDropDownOptionList.bind(this);

		this.openDropDownOptionList = this.openDropDownOptionList.bind(this);
		this.closeDropDownOptionList = this.closeDropDownOptionList.bind(this);
		this.changeDropDownOptionList = this.changeDropDownOptionList.bind(this);
		this.selectDropDownListOption = this.selectDropDownListOption.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if (!this.optionList.length) {
			this.optionList= nextProps.optionList;

			this.setState({
				filteredOptionList: this.optionList
			});
		}
	}

	render() {
		return (
			<div className="control_dropdown-list">
				<label className="dropdown_option-filter_label">{this.props.controlLabel}</label>
				<input className="dropdown_option-filter_input" id={this.props.uniqueId} type="text" placeholder="Search.."
				       onChange={this.changeDropDownOptionList}
				       onClick={this.openDropDownOptionList}
				       onBlur={this.closeDropDownOptionList}/>
				<button className="dropdown_option-filter-reset_btn" value="resetBtn" onClick={this.resetDropDownOptionList}>Reset</button>
				<div className="dropdown_option-list">
					<DropDownOptionListView dropDownOptionListState={this.state.dropDownOptionListState} dropDownOptionList={this.state.filteredOptionList} selectDropDownListOption={this.selectDropDownListOption}/>
				</div>
			</div>
		);
	}

	changeDropDownOptionList(e) {
		var filter = e.currentTarget.value;
		var filteredOptionList = this.optionList.filter((item) => {
			return item.includes(filter);
		});

		this.setState({
			filteredOptionList: filteredOptionList
		});
	}

	resetDropDownOptionList(e) {
		document.getElementById(this.props.uniqId).value = '';

		this.props.resetFilter(e);
	}

	selectDropDownListOption(e) {
		document.getElementById(this.props.uniqId).value = e.currentTarget.text;

		this.props.selectFilter(e);

		this.closeDropDownOptionList();
	}

	openDropDownOptionList() {
		this.setState({
			listStateClassName: 'open'
		});
	}

	closeDropDownOptionList() {
		this.setState({
			listStateClassName: 'closed'
		});
	}
}

export default DropDownFilterListView;
