// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQxasuU--DhBmQw_Zng5416SLnq3k2dNo",
  authDomain: "polishmebymo.firebaseapp.com",
  projectId: "polishmebymo",
  storageBucket: "polishmebymo.appspot.com",
  messagingSenderId: "770684467133",
  appId: "1:770684467133:web:6336b59d066f3f5f8404d4",
  measurementId: "G-GQ5VLVXXMD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;
