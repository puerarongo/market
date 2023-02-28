// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3wREHPFfq2g8858n_51QTOm1kSd0FXk0",
  authDomain: "react-market-effa1.firebaseapp.com",
  projectId: "react-market-effa1",
  storageBucket: "react-market-effa1.appspot.com",
  messagingSenderId: "455245108310",
  appId: "1:455245108310:web:7fbc71c37af4238bd497f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ? Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
