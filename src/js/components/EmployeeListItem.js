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
					<img className="picture-image" alt="employee_image" src={this.props.picture}/>
				</div>
				<div className="list-item_info">
					<div className="info_name">
						<h1>{ this.props.name }</h1>
					</div>
					<div className="info_role">
						<h3>{ this.props.role }</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default EmployeeListItem;
