/**
 * Created by Serhiy on 20.03.18.
 */
import React, { Component } from 'react';

import EmployeesListItemView from './../components/EmployeesListItemView';

import './../../css/EmployeeListStyle.css';

class EmployeesList extends Component {
	render() {
		return (
			<div className="employee-list">
				{
					this.props.employyeListData.map((listItem) =>
						<EmployeesListItemView onClick={this.props.openInfoScreenView}
						                       key={listItem.name}
						                       picture={listItem.profileImage}
						                       name={listItem.name}
						                       role={listItem.role}
						                       companyLogo={listItem.logo}
						                       bio={listItem.bio}
						                       skills={listItem.skills}/>
					)
				}
			</div>
		);
	}
}

export default EmployeesList;

