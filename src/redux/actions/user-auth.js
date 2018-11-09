import * as firebase from 'firebase/app';
import 'firebase/auth';

export const STORE_USER_DATA = 'STORE_USER_DATA';
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';

export function storeUserData() {
	return {
		type: STORE_USER_DATA,
		payload: firebase.auth().currentUser
	};
}

export function clearUserData() {
	return {
		type: CLEAR_USER_DATA
	};
}