//funções de autenticação para login do usuário na plataforma

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

//login com senha e email
export async function loginUserEmail(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

//criação de usuário
export async function signinUserEmail(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

//criação de usuário - login com google
export async function signinGoogle() {
  return signInWithPopup(auth, provider);
}

//verifica se o usuário está loggado
export function statusUser(status) {
  return onAuthStateChanged(auth, (user) => {
    status(user !== null);
  });
}

//logout
export function logout() {
  return signOut(auth);
}
