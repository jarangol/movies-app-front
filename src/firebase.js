import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC_GE3_caYIn-jnhLo3clrfvliR8f1YMTg",
  authDomain: "movies-app-641ac.firebaseapp.com",
  projectId: "movies-app-641ac",
  storageBucket: "movies-app-641ac.appspot.com",
  messagingSenderId: "450329142315",
  appId: "1:450329142315:web:9d6b7b5d2f7e202910f66e"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export default app;