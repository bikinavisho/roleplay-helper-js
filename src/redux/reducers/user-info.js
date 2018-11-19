import * as userActionTypes from '../actions/user-auth';

const initialState = {isLoggedIn: false, loggedInUser: 'not signed in'};

export default function (state = initialState, action = {}) {
	switch(action.type) {
		case userActionTypes.STORE_USER_DATA:
			let user = action.payload;

			if (user) {
				// User is signed in.
				let userData = {};
				// Store relevant user data
				['displayName', 'email', 'photoURL', 'lastLoginAt', 'createdAt'].forEach((key) => {
					userData[key] = user[key];
				});
				return {...state, isLoggedIn: true, loggedInUser: userData};
			} else {
				// No user is signed in.
				return initialState;
			}

		case userActionTypes.STORE_USER_DB_ENTRY:
			let userData = {};
			// The object we are receiving looks like:
			// {[uid]: {userData} }
			// Goal: flatten object so can access all properties with one jump
			Object.keys(action.payload).forEach((key) => {
				userData = Object.assign(userData, action.payload[key]);
				userData.uid = key;
			});
			return {...state, userData};
			// output: {userData: {uid, email, role, characters, roles}}

		case userActionTypes.STORE_USER_UID:
			return {...state, userData: action.payload};

		case userActionTypes.CLEAR_USER_DATA:
			// When the user is logged out, clear out all of their data
			return initialState;
	}

	return state;
}