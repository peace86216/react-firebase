// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import app from 'firebase/app';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyBnx3rhCkXjy5yuaRdDTWfubVB8cSbaK-s",
    authDomain: "peace-fribase-web.firebaseapp.com",
    databaseURL: "https://peace-fribase-web.firebaseio.com",
    projectId: "peace-fribase-web",
    storageBucket: "peace-fribase-web.appspot.com",
    messagingSenderId: "432402699905",
    appId: "1:432402699905:web:183c4a0230e0ffb4d45f80"
};


class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);
    doSignOut = () => this.auth.signOut();
}

export default Firebase;