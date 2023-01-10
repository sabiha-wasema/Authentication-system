// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXt19u24w_IZuaBafy6v0hY7yG4BOwX-0",
  authDomain: "authentication-system-efe3c.firebaseapp.com",
  projectId: "authentication-system-efe3c",
  storageBucket: "authentication-system-efe3c.appspot.com",
  messagingSenderId: "86010190055",
  appId: "1:86010190055:web:f1655daa7fca532a886a42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
