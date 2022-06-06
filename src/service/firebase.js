import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVm2PU8atiyVxNnmji4d52DkPhdwu7UaU",
  authDomain: "e-commerce-react-project-58db0.firebaseapp.com",
  projectId: "e-commerce-react-project-58db0",
  storageBucket: "e-commerce-react-project-58db0.appspot.com",
  messagingSenderId: "407440106717",
  appId: "1:407440106717:web:5800500e1af2d41552e734"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;