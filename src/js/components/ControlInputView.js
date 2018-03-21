/**
 * Created by Serhiy on 20.03.18.
 */
import React, { Component } from 'react';

class ControlInputView extends Component {
	render() {
		return (
			<div className="control-input-view">
				<label className="view_label">{this.props.controlLabel}</label>
				<input className="view_input" onChange={this.props.inputChangeCallback}/>
			</div>
		);
	}
}

export default ControlInputView;
