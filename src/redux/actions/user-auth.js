import * as firebase from 'firebase/app';
import 'firebase/auth';
import database from '../../data/database';
import genUid from 'uid-safe';
import {User} from '../../data/user';

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
		ref.orderByChild('email').equalTo(currentUser.email).once('value').then((result) => {
			console.log('query result exists ', result.exists());
			console.log('query result exportVal ', result.exportVal());
			if (!result.exists()) {
				database.ref('users/' + genUid.sync(16)).set(new User(currentUser.email, 'GM')).then(() => {
					console.log('user successfully created')
				}).catch((e) => {
					console.log('user failed to create ', e);
				})
			}
		}).catch((e) => {
			console.log('query failed ', e);
		});
	}
}

export function clearUserData() {
	return {
		type: CLEAR_USER_DATA
	};
}