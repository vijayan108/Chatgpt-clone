import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCBN7TmWnQYmmLgAfGSkLTXkUgB25OPUBo",
    authDomain: "chat-gpt-clone-2023.firebaseapp.com",
    projectId: "chat-gpt-clone-2023",
    storageBucket: "chat-gpt-clone-2023.appspot.com",
    messagingSenderId: "197637893471",
    appId: "1:197637893471:web:ba954e9931f8a7ba4f5aea"
}

// Initialize Firebase - single instance (Singleton)
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }