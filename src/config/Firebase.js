import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  orderBy,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXzlVgBcC0mZsvoOZHASN2j3RWrdJy0RE",
  authDomain: "react-native-expo-9347f.firebaseapp.com",
  projectId: "react-native-expo-9347f",
  storageBucket: "react-native-expo-9347f.appspot.com",
  messagingSenderId: "960319740553",
  appId: "1:960319740553:web:2d3e3e403fc5a9e1644458",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();
const db = getFirestore();



export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  db,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
  orderBy
};