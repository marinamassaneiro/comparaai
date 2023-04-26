import {
  initializeApp,
  getFirestore,
} from './exports.js';

const firebaseConfig = {
  apiKey: "AIzaSyD4nXEN10uiVqek97iFmb1uXSJGFi-Lhd8",
  authDomain: "senac-comparaai.firebaseapp.com",
  projectId: "senac-comparaai",
  storageBucket: "senac-comparaai.appspot.com",
  messagingSenderId: "700513014331",
  appId: "1:700513014331:web:a8e753823a3bd32860821e",
  measurementId: "G-245Z318DKC"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
