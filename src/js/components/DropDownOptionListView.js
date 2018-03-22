/**
 * Created by Serhiy on 20.03.18.
 */
import React, { Component } from 'react';

class DropDownOptionListView extends Component {
	render() {
		return (
			<div className={this.props.dropDownOptionListState + " dropDown-list-item-view"} >
				<ul>
					{
						this.props.dropDownOptionList.map((listItem, index) =>
							<a key={index} onMouseDown={this.props.selectDropDownListOption}>{listItem}</a>
						)
					}
				</ul>
			</div>
		);
	}
}

export default DropDownOptionListView;
