import firebase from 'firebase/app';
import 'firebase/analytics';

// adding your firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyB_GW7Rn_Wwr1Syo8Er6rnxu4rPMV7eWA8",
  authDomain: "sertge-testing1.firebaseapp.com",
  projectId: "sertge-testing1",
  storageBucket: "sertge-testing1.appspot.com",
  messagingSenderId: "431508655301",
  appId: "1:431508655301:web:d4c98d5b1da469619bb4ac"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
