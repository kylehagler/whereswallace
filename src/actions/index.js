export function selectCharacter(character) {
	if(character.found) {
		return;
	}
	
	// Action creator; needs to return an action (an object with a type property)
	return {
		type: 'CHARACTER_ACTIVATED',
		payload: character
	};
}

export function boardClicked(event, activeCharacter) {
	return {
		type: 'BOARD_CLICKED',
		payload: {
			"id": event.target.id,
			"activeCharacter": activeCharacter.id
		}
	};
}
