/* global process */

import * as firebase from 'firebase/app'
// These imports load individual services into the firebase namespace.
import 'firebase/database'

// Initialize Firebase
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSENGING_SENDER_ID
}

firebase.initializeApp(config)
const database = firebase.database()

export default database
