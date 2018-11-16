export function User(email, role) {
	this.email = email;
	this.role = role;
	// NOTE: ARRAYS CANNOT BE STORED IN FIREBASE REALTIME DATABASE
	// ALSO NOTE: EMPTY VALUES WILL BE REMOVED!
	this.characters = [];
	this.races = [];
}