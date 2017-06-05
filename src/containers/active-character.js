import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCharacter extends Component {
	render() {		
		return (
			<div id="active-box">
				<div className="active-image">
					<img src={this.props.character.avatar} />
				</div>
				<div className="active-name">
					{this.props.character.name}
				</div>	
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		character: state.activeCharacter	
	};
}

export default connect(mapStateToProps)(ActiveCharacter);