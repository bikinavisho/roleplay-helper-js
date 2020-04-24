import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import userInfo from './user-info'
import charactersReducer from './characters-reducer'

export default combineReducers({
  form: formReducer,
  userInfo: userInfo,
  characterList: charactersReducer
})
