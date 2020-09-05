import {SAVE_CHARACTER_NAME, STORE_ALL_CHARACTER_DATA, STORE_CHARACTER_DATA} from '../actions/character-access';

export default (state = {}, action = {}) => {
  switch(action.type) {
    case STORE_ALL_CHARACTER_DATA:
      if (action.payload) {
        return {...action.payload}
      }
      break;
    case SAVE_CHARACTER_NAME:
      if (action.payload) {
        return {...state, [action.payload.characterUid]: {name: action.payload.characterName}};
      }
      break;
    case STORE_CHARACTER_DATA:
      if (action.payload) {
        return {...state, [action.payload.characterUid]: action.payload.data};
      }
      break;
    default:
      return state;
  }
};
