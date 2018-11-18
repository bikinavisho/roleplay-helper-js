import * as firebase from 'firebase/app';
import 'firebase/auth';


const FIREBASE_USER_COOKIE_KEY = 'firebaseUser';

/**
 * Function which stores firebase auth user into a cookie
 *
 * @param cookies - needs to be from a component wrapped in withCookies() to give it this.props.cookies
 */
export function putUserIntoCookies(cookies) {
	let {currentUser} = firebase.auth();
	if (currentUser) {
		cookies.set(FIREBASE_USER_COOKIE_KEY, currentUser);
	}
}

export function getUserFromCookies(cookies) {
	let firebaseUser = cookies.get(FIREBASE_USER_COOKIE_KEY);
	if (firebaseUser) {
		firebase.auth().updateCurrentUser(firebaseUser).then(() => {
			console.log('retrieved and set user cookie successfully');
			console.log(firebase.auth().currentUser);
		}).catch((e) => {
			console.log('ERROR ', e , ' in setting user cookie in firebase.auth()');
		});
	}
}

export function removeUserFromCookies(cookies) {
	cookies.remove(FIREBASE_USER_COOKIE_KEY);
}