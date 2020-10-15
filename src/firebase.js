import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAriKjwr9j8PUVvt-q_3iFq6hhLEG2oSNo",
    authDomain: "tinder-clone-9b5ba.firebaseapp.com",
    databaseURL: "https://tinder-clone-9b5ba.firebaseio.com",
    projectId: "tinder-clone-9b5ba",
    storageBucket: "tinder-clone-9b5ba.appspot.com",
    messagingSenderId: "600069605974",
    appId: "1:600069605974:web:089c76e598863aa98d09f7",
    measurementId: "G-FWH71R44G0"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()

export default database
