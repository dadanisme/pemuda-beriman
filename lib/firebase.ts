// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl6kZprPMyLNwbx_DJDnZ89gzO9J5j4cA",
  authDomain: "pemuda-beriman.firebaseapp.com",
  databaseURL:
    "https://pemuda-beriman-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pemuda-beriman",
  storageBucket: "pemuda-beriman.appspot.com",
  messagingSenderId: "914422068529",
  appId: "1:914422068529:web:4a096b1628f7e120ddac10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
