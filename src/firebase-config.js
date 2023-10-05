// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk4-WfA_acNhqaOTmEde7_p_uS8cH-RVU",
  authDomain: "final-proj-592b8.firebaseapp.com",
  projectId: "final-proj-592b8",
  storageBucket: "final-proj-592b8.appspot.com",
  messagingSenderId: "798068198003",
  appId: "1:798068198003:web:84f3b92803633f9e763806"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);