// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAPifTJth3vw1KRugk2vudpYQB4cNezQQs",
//   authDomain: "todo-app-381c4.firebaseapp.com",
//   databaseURL: "https://todo-app-381c4.firebaseio.com",
//   projectId: "todo-app-381c4",
//   storageBucket: "todo-app-381c4.appspot.com",
//   messagingSenderId: "779022608299",
//   appId: "1:779022608299:web:04c96725667d168e5894ee",
//   measurementId: "G-BYPQ2T8EGP",
// };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAPifTJth3vw1KRugk2vudpYQB4cNezQQs",
  authDomain: "todo-app-381c4.firebaseapp.com",
  databaseURL: "https://todo-app-381c4.firebaseio.com",
  projectId: "todo-app-381c4",
  storageBucket: "todo-app-381c4.appspot.com",
  messagingSenderId: "779022608299",
  appId: "1:779022608299:web:04c96725667d168e5894ee",
  measurementId: "G-BYPQ2T8EGP",
});

const db = firebaseApp.firestore();
//export { db };
export default db;
