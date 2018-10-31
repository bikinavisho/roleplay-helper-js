import * as userActionTypes from '../actions/user-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';

export default function (state = {}, action = {}) {
	switch(action.type) {
		case userActionTypes.STORE_USER_DATA:
			let user = firebase.auth().currentUser;

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


	}

	return state;
}