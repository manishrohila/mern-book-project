// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmxP7XbMO2Nx9zPjqOB-IsdlFBnM3R81s",
  authDomain: "mern-book-inventory-24772.firebaseapp.com",
  projectId: "mern-book-inventory-24772",
  storageBucket: "mern-book-inventory-24772.appspot.com",
  messagingSenderId: "693918709826",
  appId: "1:693918709826:web:49a2e7d142cc2f739155db"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;