// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTUAaBIbxdQt3udpn_TqMMyMrbIP9fOCk",
    authDomain: "solo-prokect.firebaseapp.com",
    projectId: "solo-prokect",
    storageBucket: "solo-prokect.firebasestorage.app",
    messagingSenderId: "623531854543",
    appId: "1:623531854543:web:22303c0b5604fd9fbc85ba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;