// state argument is not the application state
// only the state this reducer is responsible for
export default function(state =  null, action) {
	switch(action.type) {
		case 'CHARACTER_ACTIVATED':
			return action.payload;
	}
	
	return state;
}