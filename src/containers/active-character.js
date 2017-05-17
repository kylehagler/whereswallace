import React, { Component } from 'react';
import { connect } from 'react-redux';

class ActiveCharacter extends Component {
	render() {
		if(!this.props.character) {
			return <div>Select a character to get started!</div>;
		}
		
		return (
			<div>
				{this.props.character.name}
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