// Import the functions you need from the SDKs you need
import { FirebaseApp, getApp, getApps, initializeApp } from "firebase/app";
import { Auth, getAuth, GoogleAuthProvider } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { FirebaseStorage, getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPvHQLJdr9iRfLzyiLreUQY-Lhg7cPH_A",
  authDomain: "capitalist-utopia.firebaseapp.com",
  projectId: "capitalist-utopia",
  storageBucket: "capitalist-utopia.appspot.com",
  messagingSenderId: "613390798209",
  appId: "1:613390798209:web:e8b1d6637b10756ef42c80",
  measurementId: "G-VQ9M3LMLGM",
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

export const googleAuthProvider: GoogleAuthProvider = new GoogleAuthProvider();
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);
