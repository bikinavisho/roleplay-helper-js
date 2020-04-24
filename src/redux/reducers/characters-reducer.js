import {SAVE_CHARACTER_NAME, STORE_CHARACTER_DATA} from '../actions/character-access';

export default (state = {}, action = {}) => {
  switch(action.type) {
    case STORE_CHARACTER_DATA:
      if (action.payload) {
        return {...action.payload}
      }
      break;
    case SAVE_CHARACTER_NAME:
      if (action.payload) {
        return {...state, [action.payload.characterUid]: {name: action.payload.characterName}};
      }
      break;
    default:
      return state;
  }
};
