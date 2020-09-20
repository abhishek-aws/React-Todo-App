import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "Rugk2vudpYQB4cNezQQs",
  authDomain: "todo-app-3seapp.com",
  databaseURL: "https://todo-app-381c4.firebaseio.com",
  projectId: "todo-app-381c4",
  storageBucket: "todo-app-381c4.appspot.com",
  messagingSenderId: "779022608299",
  appId: "1:779022608225667d168e5894ee",
  measurementId: "G-BYEGP",
});

const db = firebaseApp.firestore();
//export { db };
export default db;
