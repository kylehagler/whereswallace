import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectCharacter } from '../actions/index';
import { bindActionCreators } from 'redux';

class CharacterList extends Component {
	renderList(start, end) {
		return this.props.characters.map((character, index) => {
			
			var myClass = null;
			
			if(index >= start && index <= end) {
				if(this.props.activeCharacter) {
					if(this.props.activeCharacter.name === character.name) {	
						myClass = 'active-character';	
					} else if(character.found) {
						myClass = 'found-character';
					}
				}	
			
				return (
					<li 
						key={character.id}
						onClick={() => this.props.selectCharacter(character)}
						className={myClass}
						id={character.id}
					>
					{character.name}
					</li>	
				);
			}
			
		});
	}
	
	render() {
		return (
			<div className="characters">			
				<div className="container">
					<div className="columns">
					  <div className="column">
					    <ul className="character-list">
							{this.renderList(0, 10)}
						</ul>
					  </div>
					  <div className="column">
					    <ul className="character-list">
							{this.renderList(11, 21)}
						</ul>
					  </div>
					  <div className="column">
					    <ul className="character-list">
							{this.renderList(22, 32)}
						</ul>
					  </div>
					  <div className="column">
					    <ul className="character-list">
							{this.renderList(33, 43)}
						</ul>
					  </div>
					  <div className="column">
					    <ul className="character-list">
							{this.renderList(44, 46)}
						</ul>
					  </div>
					</div>
				</div>
			</div>	
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