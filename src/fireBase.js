// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFt7lT3m79vYUnzSMQTUOr6UM0_Em3cvs",
  authDomain: "evion-53e9e.firebaseapp.com",
  projectId: "evion-53e9e",
  storageBucket: "evion-53e9e.appspot.com",
  messagingSenderId: "725292759959",
  appId: "1:725292759959:web:c34a76e6762e79e75822d2",
  measurementId: "G-THR298HS2P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
