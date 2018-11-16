import * as firebase from 'firebase/app';
import 'firebase/auth';
import database from '../../data/database';
import genUid from 'uid-safe';
import {User} from '../../data/user';
import {Character} from '../../data/character-constructors';

export const STORE_USER_DATA = 'STORE_USER_DATA';
export const CLEAR_USER_DATA = 'CLEAR_USER_DATA';

export function storeUserData() {
	return {
		type: STORE_USER_DATA,
		payload: firebase.auth().currentUser
	};
}

export function createNewUser() {
	let currentUser = firebase.auth().currentUser;
	if (currentUser) {
		let ref = database.ref('users');
		// Search for instances in the database that might already have this email address
		ref.orderByChild('email').equalTo(currentUser.email).once('value').then((dataSnapshot) => {
			// Returns true if there are values, false if there are no values
			if (!dataSnapshot.exists()) {
				// If user doesn't already exist, add them to the database
				database.ref('users/' + genUid.sync(16)).set(new User(currentUser.email, 'player'));
			}
		});
	}
}

// dataSnapshot.exportVal();
export function addCharacterToUser(charUid, charName) {
	let currentUser = firebase.auth().currentUser;
	if (currentUser) {
		// Search for this user in the database
		let userQuery = database.ref('users').orderByChild('email').equalTo(currentUser.email);
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
		let userQuery = database.ref('users').orderByChild('email').equalTo(currentUser.email);
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

export function clearUserData() {
	return {
		type: CLEAR_USER_DATA
	};
}