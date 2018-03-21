/**
 * Created by Serhiy on 20.03.18.
 */
import React, { Component } from 'react';

import EmployeeListItem from './../components/EmployeeListItem';

import './../../css/EmployeeList.css';

class EmployeeList extends Component {
	render() {
		return (
			<div className="employee-list">
				<ul>
					{
						this.props.employyeListData.map((listItem, index) =>
							<EmployeeListItem key={index} picture={listItem.pic} name={listItem.name} role={listItem.role} companyLogo={listItem.logo}/>
						)
					}
				</ul>
			</div>
		);
	}
}

export default EmployeeList;

