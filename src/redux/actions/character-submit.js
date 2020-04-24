import * as firebase from 'firebase/app';
import database from '../../data/database';
import {userQueryByEmail} from '../../utils/firebase-utils';
import genUid from 'uid-safe';

export const SAVE_CHARACTER_NAME = 'SAVE_CHARACTER_NAME'

export function initializeCharacterData () {
  return (dispatch) => {
    // console.log(database.ref('characters'));
  };
}

// dataSnapshot.exportVal();
export function addCharacterToUser (charName) {
  return (dispatch) => {
    const charUid = genUid.sync(16);
  	const currentUser = firebase.auth().currentUser;
  	if (currentUser) {
  		// Search for this user in the database
  		const userQuery = userQueryByEmail(currentUser.email);
  		userQuery.once('value').then((dataSnapshot) => {
  			// Look at the results, if there, then
  			if (dataSnapshot.exists()) {
          let currentUserGuid = Object.keys(dataSnapshot.exportVal())[0];
          let currentUserData = dataSnapshot.exportVal()[currentUserGuid];
          let currentUserCharacterData = currentUserData.characters;

  				// If characters child already exists, add to it
  				if (dataSnapshot.child(currentUserGuid).hasChild('characters')) {
  					userQuery.ref.child(currentUserGuid).child('characters').set({...currentUserCharacterData, [charUid]: charName });
  				} else {
  					// else, create characters child with associated data
            // TODO: USERQUERY.REF IS JUST THE `/users/`, NOT OUR USER
  					userQuery.ref.child(currentUserGuid).set({...currentUserData, characters: { [charUid]: charName } });
            // userQuery.ref.set({...dataSnapshot.exportVal(), characters: { [charUid]: charName } });
  				}
          // Add character uid and name to the character set of the db
          database.ref('characters/' + charUid).set({
      			name: charName
      		});
          // Save character uid and name in the reducer
          dispatch({
            type: SAVE_CHARACTER_NAME,
            payload: {
              characterUid: charUid,
              characterName: charName
            }
          })
  			}
  		})
  	}
    return charUid
  }
}
