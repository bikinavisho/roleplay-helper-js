import Firebase from 'firebase';

// Initialize Firebase
let config = {
  apiKey: "AIzaSyByBXGFBJApMnEQnrUr4okDO3csuA6Vj2M",
  authDomain: "roleplay-helper.firebaseapp.com",
  databaseURL: "https://roleplay-helper.firebaseio.com",
  projectId: "roleplay-helper",
  storageBucket: "",
  messagingSenderId: "1049013151879"
};
firebase.initializeApp(config);
const database = firebase.database();

export default database;
