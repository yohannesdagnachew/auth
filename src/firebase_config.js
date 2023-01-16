import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBdtAIkSLAcrIVressQwS5dOi_Jv46Rytk",
    authDomain: "auth-41d99.firebaseapp.com",
    projectId: "auth-41d99",
    storageBucket: "auth-41d99.appspot.com",
    messagingSenderId: "1044391182151",
    appId: "1:1044391182151:web:2511c42072eeb0bdb2d662"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)