import React, { Component } from 'react';
import Board from '../containers/board';
import ActiveCharacter from '../containers/active-character';

import CharacterList from '../containers/character-list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<div className="illustration-container">
      		<ActiveCharacter />
      		<Board />
      	</div>
      	<CharacterList />
      </div>
    );
  }
}
