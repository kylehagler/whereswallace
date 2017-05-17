import { combineReducers } from 'redux';
import CharactersReducer from './reducer_characters';
import ActiveCharacter from './reducer_active_character';

const rootReducer = combineReducers({
  characters: CharactersReducer,
  activeCharacter: ActiveCharacter
});

export default rootReducer;
