import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgGu4F92K3KQgp_I3WbRMv4ndHNjijw3c",
  authDomain: "organice-e97f7.firebaseapp.com",
  projectId: "organice-e97f7",
  storageBucket: "organice-e97f7.appspot.com",
  messagingSenderId: "1059640068629",
  appId: "1:1059640068629:web:5f0b31d086c7aa7a32dc1c",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
