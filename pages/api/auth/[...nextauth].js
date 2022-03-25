import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google"
import { FirebaseAdapter } from '@next-auth/firebase-adapter'
import { db } from '../../../firebase'
// import { firebaseConfig } from "../../../firebase"
// import firebase from "firebase/compat/app"
// import "firebase/compat/firestore"
import Providers from "next-auth/providers"

// const firebaseConfig = {
//     apiKey: "AIzaSyC0Xaei6JJeU6n8w2b8Iug1hkemAVDhlOg",
//     authDomain: "docs-clone-a6a53.firebaseapp.com",
//     projectId: "docs-clone-a6a53",
//     storageBucket: "docs-clone-a6a53.appspot.com",
//     messagingSenderId: "36715185626",
//     appId: "1:36715185626:web:cf54469577ffb0f73aece3"
// };
// const firestore = (
//     firebase.apps[0] ?? firebase.initializeApp(firebaseConfig)
// ).firestore()

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
    adapter: FirebaseAdapter(db),

})