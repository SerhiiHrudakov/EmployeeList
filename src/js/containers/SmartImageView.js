/**
 * Created by Serhiy on 20.03.18.
 */
import React, { Component } from 'react';

import Settings from './../services/Settings';

class SmartImageView extends Component {
	render() {
		return (
			<div className="smart-image-view">
				<img className="picture-image" alt="employee" src={this.props.pictureSrc} onError={this.loadDefaultImage}/>
			</div>
		);
	}

	loadDefaultImage(e) {
		e.currentTarget.src = Settings.DEFAULT_IMAGE
	}
}

export default SmartImageView;
