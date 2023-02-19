// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyACjCVJ-3IQVlfBRv81chwuu_7EwP-coEg",
    authDomain: "pingpong-trk.firebaseapp.com",
    projectId: "pingpong-trk",
    storageBucket: "pingpong-trk.appspot.com",
    messagingSenderId: "964833925694",
    appId: "1:964833925694:web:9d556b2b785644bc0a4f6f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;