import * as userActionTypes from '../actions/user-auth';

export default function (state = {}, action = {}) {
	switch(action.type) {
		case userActionTypes.STORE_USER_DATA:
			let user = action.payload;

			if (user) {
				let userData = {};
				userData.displayName = user.displayName;
				// User is signed in.
				user.providerData.forEach((profile) => {
					userData[profile.providerId] = {
						name: profile.displayName,
						email: profile.email,
						photoUrl: profile.photoURL
					};
				});
				return {...state, isLoggedIn: true, loggedInUser: userData};
			} else {
				// No user is signed in.
				return {...state, isLoggedIn: false, loggedInUser: 'not signed in'};
			}

		case userActionTypes.STORE_USER_DB_ENTRY:
			return {...state, userData: action.payload};

		case userActionTypes.CLEAR_USER_DATA:
			// When the user is logged out, clear out all of their data
			return {isLoggedIn: false, loggedInUser: 'not signed in'};
	}

	return state;
}