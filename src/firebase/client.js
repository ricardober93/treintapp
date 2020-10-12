import * as firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAAHkdLY1kpewj6qiEND0glRusGUHDO_CA",
    authDomain: "apptutor-pj09.firebaseapp.com",
    databaseURL: "https://apptutor-pj09.firebaseio.com",
    projectId: "apptutor-pj09",
    storageBucket: "apptutor-pj09.appspot.com",
    messagingSenderId: "466586290416",
    appId: "1:466586290416:web:f446d507391a0961"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig)
const mapUserFromFirebaseAuthToUser = user => {
    const {
        displayName,
        email,
        photoURL,
        uid
    } = user
    return {
        avatar: photoURL,
        username: displayName,
        email,
        uid
    }
}

export const onAuthChanged = (onChange) => {
    return firebase.auth().onAuthStateChanged(user => {
        const normalizeUser = user ? mapUserFromFirebaseAuthToUser(user) : null
        onChange(normalizeUser)
    })
}

export const loginWithGoogle = () => {
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithRedirect(GoogleProvider)
}
export const logout = () => {
    return firebase.auth().signOut()
}