export function selectCharacter(character) {
	// Action creator; needs to return an action (an object with a type property)
	return {
		type: 'CHARACTER_ACTIVATED',
		payload: character
	};
}

export function boardClicked(event) {
	console.log(event.target.id);
	
	return {
		type: 'BOARD_CLICKED',
		payload: event.target.id
	};
}