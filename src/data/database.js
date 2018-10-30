/* global process */

import firebase from 'firebase';

// Initialize Firebase
let config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSENGING_SENDER_ID
};

console.log('NONSTRING ', process.env.REACT_APP_NONSTRING)
console.log('STRING ', process.env.REACT_APP_STRING)

console.log('config ', config);
firebase.initializeApp(config);
const database = firebase.database();

export default database;
