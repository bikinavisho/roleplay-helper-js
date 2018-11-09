import * as firebase from 'firebase/app';
import 'firebase/auth';
import provider from './provider';

export function popUpSignIn() {
	return firebase.auth().signInWithPopup(provider).then(function(result) {
		console.log('AUTHENTICATION SUCCESS');
		if (result.credential) {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const token = result.credential.accessToken;
		}
		// The signed-in user info.
		const user = result.user;
	}).catch(function(error) {
		console.log('AUTHENTICATION FAILURE ', error);
		// Handle Errors here.
		const errorCode = error.code;
		const errorMessage = error.message;
		// The email of the user's account used.
		const email = error.email;
		// The firebase.auth.AuthCredential type that was used.
		const credential = error.credential;
	});
}

export function redirectSignIn() {
	return firebase.auth().signInWithRedirect(provider).then(() => {
		console.log('successfully  authenticated')
	}).catch((error) => {
		console.log('failed to authenticate ', error)
	});
}

export function getCredentials() {
	firebase.auth().getRedirectResult().then(function(result) {
		console.log('getCredentials successful');
		// The signed-in user info.
		let googleUser = result.user;

		let id_token = googleUser.getAuthResponse().id_token;

		// Build Firebase credential with the Google ID token.
		let credential = provider.credential(id_token);

		// Sign in with credential from the Google user.
		return firebase.auth().signInAndRetrieveDataWithCredential(credential);
	}).catch(function(error) {
		console.log('failed to getCredentials ', error);
		// Handle Errors here.
		let errorCode = error.code;
		let errorMessage = error.message;
		// The email of the user's account used.
		let email = error.email;
		// The firebase.auth.AuthCredential type that was used.
		let credential = error.credential;
		// ...
	});
}

export function logOff() {
	return firebase.auth().signOut().then(function() {
		// Sign-out successful.
	}).catch(function(error) {
		// An error happened.
	});
}