import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from './exports.js';

import {
  app,
} from './config.js';

export const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

export async function loginUserEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export async function signinUserEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function signinGoogle() {
  return signInWithPopup(auth, provider);
}

export function statusUser(status) {
  return onAuthStateChanged(auth, (user) => {
    status(user !== null);
  });
}

export function logout() {
  return signOut(auth);
}
