import * as firebase from 'firebase/app';
import 'firebase/auth';
import database from '../../data/database';
import genUid from 'uid-safe';
import {User} from '../../data/user';
import {findUserByEmail, userQueryByEmail} from '../../utils/firebase-utils';

export const STORE_USER_DATA = 'STORE_USER_DATA';
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';
export const STORE_USER_DB_ENTRY = 'STORE_USER_DB_ENTRY';
export const STORE_USER_UID = 'STORE_USER_UID';

export function storeUserData(isNew = false) {
	return (dispatch) => {
		let {currentUser} = firebase.auth();
		dispatch({
			type: STORE_USER_DATA,
			payload: currentUser
		});
		// get or create associated user data in our database
		if (currentUser) {
			// Search for instances in the database that might already have this email address
			findUserByEmail(currentUser.email).then((dataSnapshot) => {
				// Returns true if there are values, false if there are no values
				if (dataSnapshot.exists()) {
					dispatch({
						type: STORE_USER_DB_ENTRY,
						payload: dataSnapshot.exportVal()
					});
				} else if (isNew) {
					// If user doesn't already exist, add them to the database
					let uid = genUid.sync(16);
					let userObject = new User(currentUser.email, 'player');
					database.ref('users/' + uid).set(userObject);
					dispatch({
						type: STORE_USER_UID,
						payload: {uid, ...userObject}
					});
				}
			});
		}
	};
}

export function clearUserData() {
	return {
		type: CLEAR_USER_DATA
	};
}

// dataSnapshot.exportVal();
export function addCharacterToUser(charUid, charName) {
	let currentUser = firebase.auth().currentUser;
	if (currentUser) {
		// Search for this user in the database
		let userQuery = userQueryByEmail(currentUser.email);
		userQuery.once('value').then((dataSnapshot) => {
			// Look at the results, if there, then
			if (dataSnapshot.exists()) {
				// If characters child already exists, add to it
				if (dataSnapshot.hasChild('characters')) {
					userQuery.ref.child('characters').push({[charUid]: charName});
				} else {
					// else, create characters child with associated data
					userQuery.ref.set({characters: {[charUid]: charName}});
				}
			}
		});
	}
}

export function addRaceToUser(raceUid, raceName) {
	let currentUser = firebase.auth().currentUser;
	if (currentUser) {
		// Search for this user in the database
		let userQuery = userQueryByEmail(currentUser.email);
		userQuery.once('value').then((dataSnapshot) => {
			// Look at the results, if there, then
			if (dataSnapshot.exists()) {
				// If races child already exists, add to it
				if (dataSnapshot.hasChild('races')) {
					userQuery.ref.child('races').push({[raceUid]: raceName});
				} else {
					// else, create races child with associated data
					userQuery.ref.set({races: {[raceUid]: raceName}});
				}
			}
		});
	}
}

