// state argument is not the application state
// only the state this reducer is responsible for
export default function(state =  { id: '_x30_1-A-RussellStringerBell', name: 'Stringer Bell', avatar: 'img/1.jpg', found: false }, action) {
	switch(action.type) {
		case 'CHARACTER_ACTIVATED':
			return action.payload;
	}
	
	return state;
}