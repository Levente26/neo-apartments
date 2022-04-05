import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDIpa-_38roZPaWHEOP9wYcMtGnqJh_uxw",
    authDomain: "neo-apartments.firebaseapp.com",
    projectId: "neo-apartments",
    storageBucket: "neo-apartments.appspot.com",
    messagingSenderId: "486402634663",
    appId: "1:486402634663:web:706d2cefe79912daf7bc82"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }