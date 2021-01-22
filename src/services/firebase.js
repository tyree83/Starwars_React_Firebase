import firebase from 'firebase/app'
import 'firebase/auth';


const firebaseConfig = {
// TODO: add your config object
};

firebase.initializeApp(firebaseConfig);

const googleProvider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();


function login() {
    return auth.signInWithPopup(googleProvider);
}

function logout() {
    return auth.signOut();
}

export {
    login,
    logout,
    auth
}