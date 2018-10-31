import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import userInfo from './user-info';


export default combineReducers({
	form: formReducer,
	userInfo: userInfo
});
