// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8a0sJLzhUitA3Y1V8JFFPrMZHcnnNHrM",
  authDomain: "vromon-tour.firebaseapp.com",
  projectId: "vromon-tour",
  storageBucket: "vromon-tour.appspot.com",
  messagingSenderId: "274299350286",
  appId: "1:274299350286:web:79ad4cd6588e76f9b97b5f",
  measurementId: "G-B03TN3JK19"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);