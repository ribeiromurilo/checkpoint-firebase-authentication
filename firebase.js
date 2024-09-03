// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDdhMZhyrZKASXtB30NkKPFdPFFFBOVfq4',
  authDomain: 'school-af5ed.firebaseapp.com',
  projectId: 'school-af5ed',
  storageBucket: 'school-af5ed.appspot.com',
  messagingSenderId: '966726864467',
  appId: '1:966726864467:web:f937be5f6269afa8aac0a6'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export { signInWithEmailAndPassword, createUserWithEmailAndPassword };
