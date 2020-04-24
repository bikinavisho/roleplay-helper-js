import {SAVE_CHARACTER_NAME} from '../actions/character-submit';

export default (state = {}, action = {}) => {
  switch(action.type) {
    case SAVE_CHARACTER_NAME:
      if (action.payload) {
        return {...state, [action.payload.characterUid]: {name: action.payload.characterName}};
      }
      break;
    default:
      return state;
  }
};
