import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDbYnqZQxvVc_Fw6dgks3C-g_2CbdruYSQ",
  authDomain: "clone-bd2b2.firebaseapp.com",
  projectId: "clone-bd2b2",
  storageBucket: "clone-bd2b2.appspot.com",
  messagingSenderId: "88407470255",
  appId: "1:88407470255:web:0cbfc8eb042305acece45a",
  measurementId: "G-HFY22DEG27"
};

// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);

const db=firebaseapp.firestore()
const auth=firebaseapp.auth()
export {db,auth}
