import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABwJJwqUK3qg9WqSRdZO2X3Xnd85QTho8",
  authDomain: "olx-clone-4463d.firebaseapp.com",
  projectId: "olx-clone-4463d",
  storageBucket: "olx-clone-4463d.appspot.com",
  messagingSenderId: "934138332851",
  appId: "1:934138332851:web:140a6f4a30e8e0aaa412c6",
  measurementId: "G-RV3G9899EM"
};


export default firebase.initializeApp(firebaseConfig);