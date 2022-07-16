// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBy8HS6VsQqho4YR5JBIiabKMsjHX0F3Po",
    authDomain: "house-marketplace-app-66ec0.firebaseapp.com",
    projectId: "house-marketplace-app-66ec0",
    storageBucket: "house-marketplace-app-66ec0.appspot.com",
    messagingSenderId: "1067708802774",
    appId: "1:1067708802774:web:f50f09ecebc5aefa88cb77"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()