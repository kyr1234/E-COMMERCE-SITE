import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDSdYN9i619BFIktSdFmXE-LmBZhvX8R2k",
  authDomain: "fir-45a45.firebaseapp.com",
  projectId: "fir-45a45",
  storageBucket: "fir-45a45.appspot.com",
  messagingSenderId: "901887097981",
  appId: "1:901887097981:web:e62988b2eb098902978514",
  measurementId: "G-QPMH5BKFXR"
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);

const db=firebaseapp.firestore()
const auth=firebase.auth()
export {db,auth}
