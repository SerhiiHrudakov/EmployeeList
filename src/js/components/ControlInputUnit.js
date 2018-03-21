/**
 * Created by Serhiy on 20.03.18.
 */
import React, { Component } from 'react';

class ControlInputUnit extends Component {
	render() {
		return (
			<div className="control-unit">
				<label className="unit_label">{this.props.unitLabel}</label>
				<input className="unit_input" onChange={this.props.inputChangeCallback}/>
			</div>
		);
	}
}

export default ControlInputUnit;
