// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9l0a0DYvSHB2QRmRBZQGp2ljNs9pvdQE",
  authDomain: "login-af-6a49d.firebaseapp.com",
  projectId: "login-af-6a49d",
  storageBucket: "login-af-6a49d.appspot.com",
  messagingSenderId: "424175093524",
  appId: "1:424175093524:web:51465b174c56abcb72e401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
