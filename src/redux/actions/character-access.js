import * as firebase from 'firebase/app';
import database from '../../data/database';
import {userQueryByEmail, getCharacterData} from '../../utils/firebase-utils';
import genUid from 'uid-safe';

export const SAVE_CHARACTER_NAME = 'SAVE_CHARACTER_NAME'
export const STORE_ALL_CHARACTER_DATA = 'STORE_ALL_CHARACTER_DATA'
export const STORE_CHARACTER_DATA = 'STORE_CHARACTER_DATA'

export function initializeCharacterData () {
  return (dispatch) => {
    database.ref('characters').once('value').then((dataSnapshot) => {
      dispatch(
        {
          type: STORE_ALL_CHARACTER_DATA,
          payload: dataSnapshot.exportVal()
        }
      )
    })
  }
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
            // USERQUERY.REF IS AT THE `/users/` LEVEL
  					userQuery.ref.child(currentUserGuid).set({...currentUserData, characters: { [charUid]: charName } });
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

export function getAndStoreCharacterData(characterId) {
  return (dispatch) => {
    return getCharacterData(characterId).then((dataSnapshot) => {
      if (dataSnapshot.exists()) {
        dispatch({
          type: STORE_CHARACTER_DATA,
          payload: {
            characterUid: characterId,
            data: dataSnapshot.exportVal()
          }
        });
        return dataSnapshot.exportVal()
      }
    });
  };
}
