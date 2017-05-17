const characters = [
    { 
        id: '_x30_1-A-RussellStringerBell',
        name: 'Stringer Bell', 
        found: false
    },
    { 
        id: '_x34_6-A-JimmyMcNulty',
        name: 'Jimmy McNulty',
        found: false
    }
];

export default function(state = characters, action) {

  switch(action.type) {
    case 'BOARD_CLICKED':
      return state.map((character) => {  // map over the characters, returning a new array
        if (character.id === action.payload) { // if character id matches action id, change that character
          return {
            ... character, // this uses the proposed object destructuring, make sure your babel lets you use it
            found: !character.found // this toggles the view, but you could just set it to true
          }
        } else { // if the id doesn't match, return the original character
          return character
        }
      });
    default:
      return state; // return the state, not the characters on default
  }
}