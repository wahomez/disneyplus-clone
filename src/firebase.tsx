import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCEv2Ql2T_h8U8IgJogqXlARbCDuwdommA",
    authDomain: "disneyplus-clone-e9476.firebaseapp.com",
    projectId: "disneyplus-clone-e9476",
    storageBucket: "disneyplus-clone-e9476.appspot.com",
    messagingSenderId: "590371764252",
    appId: "1:590371764252:web:1edbfeeecfefc2ae1587d9",
    measurementId: "G-5LK46MPCVB"
  };

//Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const auth = firebase.auth();


export { auth, provider, storage};
export default db;