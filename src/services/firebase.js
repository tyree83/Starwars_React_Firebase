import firebase from 'firebase/app'
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBWgXJ7oWIJ_b_s86L7fslVtInpsWEdlIQ",
  authDomain: "starwarsify-64d43.firebaseapp.com",
  projectId: "starwarsify-64d43",
  storageBucket: "starwarsify-64d43.appspot.com",
  messagingSenderId: "182860729992",
  appId: "1:182860729992:web:fd6a2f894a18a78d29593d"
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