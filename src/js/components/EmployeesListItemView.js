/**
 * Created by Serhiy on 20.03.18.
 */
import React, { Component } from 'react';

class EmployeesListItemView extends Component {
	render() {
		return (
			<div className="employee_list-item-view">
				<div className="view_picture">
					<img className="picture-image" alt="employee" src={this.props.picture}/>
				</div>
				<div className="view_info">
					<div className="info_name">
						<a>Name</a>
						<h3>{ this.props.name }</h3>
					</div>
					<div className="info_role">
						<a>Role</a>
						<h4>{ this.props.role }</h4>
					</div>
				</div>
				<div className="view_logo">
					<img className="logo-image" alt="company-logo" src={this.props.companyLogo} />
				</div>
			</div>
		);
	}
}

export default EmployeesListItemView;
