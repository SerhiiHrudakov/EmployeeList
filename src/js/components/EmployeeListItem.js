/**
 * Created by Serhiy on 20.03.18.
 */
import React, { Component } from 'react';

import './../../css/Employee.css';

class EmployeeListItem extends Component {
	render() {
		return (
			<div className="employee_list-item">
				<div className="list-item_picture">
					<img className="picture-image" alt="employee" src={this.props.picture}/>
				</div>
				<div className="list-item_info">
					<div className="info_name">
						<a>Name</a>
						<h3>{ this.props.name }</h3>
					</div>
					<div className="info_role">
						<a>Role</a>
						<h4>{ this.props.role }</h4>
					</div>
				</div>
				<div className="list-item_logo">
					<img alt="company-logo" src={this.props.companyLogo} />
				</div>
			</div>
		);
	}
}

export default EmployeeListItem;
