// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC0Xaei6JJeU6n8w2b8Iug1hkemAVDhlOg",
    authDomain: "docs-clone-a6a53.firebaseapp.com",
    projectId: "docs-clone-a6a53",
    storageBucket: "docs-clone-a6a53.appspot.com",
    messagingSenderId: "36715185626",
    appId: "1:36715185626:web:cf54469577ffb0f73aece3"
};

// Initialize Firebase
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore()

export { db }