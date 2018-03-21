/**
 * Created by Serhiy on 20.03.18.
 */
import React, { Component } from 'react';

class OptionListUnit extends Component {
	render() {
		return (
			<div className={this.props.listState + " list-unit"} >
				<ul>
					{
						this.props.optionList.map((listItem, index) =>
							<a key={index} onClick={this.props.selectListItemCallback}>{listItem.role}</a>
						)
					}
				</ul>
			</div>
		);
	}
}

export default OptionListUnit;
