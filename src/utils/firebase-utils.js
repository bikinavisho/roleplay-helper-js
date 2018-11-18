import * as firebase from 'firebase/app';
import 'firebase/auth';
import database from '../data/database';

export function isUserAuthenticated() {
	return Boolean(firebase.auth().currentUser);
}

export function checkForAuthentication(callbackFunction) {
	firebase.auth().onAuthStateChanged(callbackFunction);
}

export function userQueryByEmail(email) {
	return database.ref('users').orderByChild('email').equalTo(email);
}

/**
 * Function which returns a promise with DataSnapshot inside with potential user db data
 *
 * @param email
 * @returns {Promise<firebase.database.DataSnapshot>}
 */
export function findUserByEmail(email) {
	// Search for instances in the database that might already have this email address
	return userQueryByEmail(email).once('value');
}