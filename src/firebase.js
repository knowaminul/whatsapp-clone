import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBdQK942iPpA2NNNEpGALBMxbxkgD-Uus",
  authDomain: "whatsapp-clone-knowaminul.firebaseapp.com",
  projectId: "whatsapp-clone-knowaminul",
  storageBucket: "whatsapp-clone-knowaminul.appspot.com",
  messagingSenderId: "638940782614",
  appId: "1:638940782614:web:4da74dab20ba55d91c9537",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
