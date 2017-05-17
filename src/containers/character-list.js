import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCharacter } from '../actions/index';
import { bindActionCreators } from 'redux';

class CharacterList extends Component {
	renderList() {
		return this.props.characters.map((character) => {
			
			var myClass = null;
			
			if(this.props.activeCharacter) {
				if(this.props.activeCharacter.name === character.name) {
					myClass = 'active-character';
				}
			}
			
			return (
				<li 
					key={character.id}
					onClick={() => this.props.selectCharacter(character)}
					className={myClass}
				>
				{character.name}
				</li>	
			);
		});
	}
	
	render() {
		return (
			<ul className="character-list">
				{this.renderList()}
			</ul>	
		);
	}
}

function mapStateToProps(state) {
	// Whatever is returned will show up as props inside CharacterList
	return {
		characters: state.characters,
		activeCharacter: state.activeCharacter
	};
}

// Anything returned from this function will end up as props on the CharacterList container
function mapDispatchToProps(dispatch) {
	// Whenever selectCharacter is called, the result should be passed to all reducers
	return bindActionCreators({ selectCharacter: selectCharacter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);