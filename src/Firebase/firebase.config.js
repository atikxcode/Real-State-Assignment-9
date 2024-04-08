// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5I1qR9yaYRyqwGl84WwIng6msgPNecm8",
  authDomain: "elite-shores-escapes.firebaseapp.com",
  projectId: "elite-shores-escapes",
  storageBucket: "elite-shores-escapes.appspot.com",
  messagingSenderId: "358563771990",
  appId: "1:358563771990:web:bc85102ea405f9e9076df7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;