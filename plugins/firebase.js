import firebase from 'firebase/app'
import 'firebase/firestore'

if (!firebase.apps.length) {
    const config = {
        apiKey: process.env.FB_API_KEY,
        authDomain: process.env.FB_API_KEY,
        databaseURL: process.env.FB_DATABASE_URL,
        projectId: `${process.env.FB_PROJECT_ID}`,
        storageBucket: process.env.FB_STORAGE_BUCKET,
        messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
        appId: process.env.FB_APP_ID
    }
    
    firebase.initializeApp(config)
    // firebase.analytics();
}


// initialize firestore database
const Firestore = firebase.firestore;
export const db = Firestore();

