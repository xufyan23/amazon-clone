import { initializeApp } from 'firebase';
import firebase from 'firebase';


const fireBaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyDv3xDGMKyLPlpO5bzxLRlvlP6_puMfoAo",
  authDomain: "clone-f79e2.firebaseapp.com",
  projectId: "clone-f79e2",
  storageBucket: "clone-f79e2.appspot.com",
  messagingSenderId: "903408476551",
  appId: "1:903408476551:web:85e1f770a943fca2fdb322",
  measurementId: "G-RXGSV4B4SV"
})


const auth = firebase.auth();

export { auth };
