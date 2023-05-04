//importação das funções do próprio Firebase para usar no site

export {
  initializeApp,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';//eslint-disable-line

export {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js';//eslint-disable-line

export {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';//eslint-disable-line
