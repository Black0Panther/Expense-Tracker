import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw9rVEBRT6lKe96maUwKRLaeODrGBOu2w",
  authDomain: "expense-tracker-7a807.firebaseapp.com",
  projectId: "expense-tracker-7a807",
  storageBucket: "expense-tracker-7a807.firebasestorage.app",
  messagingSenderId: "951670880796",
  appId: "1:951670880796:web:a8a56b08ef096bd0bcbdd9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);