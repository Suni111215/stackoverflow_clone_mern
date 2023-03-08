// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6iP7s_JzhiymK2wf29BO_RriWbPDCSo8",
  authDomain: "stackoverflow-9fe89.firebaseapp.com",
  projectId: "stackoverflow-9fe89",
  storageBucket: "stackoverflow-9fe89.appspot.com",
  messagingSenderId: "591670900536",
  appId: "1:591670900536:web:4fbf135bfe9e98b78c73cd",
  measurementId: "G-K13XJT115L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()