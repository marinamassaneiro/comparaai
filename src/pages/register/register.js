import {
  auth,
  signinUserEmail,
} from '../../lib/auth.js';

import {
  errorsFirebase,
  validateRegister,
} from '../../validations.js';

import { redirect } from '../../redirect.js';
import { updateProfile } from '../../lib/exports.js';

export const register = () => {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  container.setAttribute('id', 'container-register');

  //código html
  const template = `
        <img class="logo" src="assets/logo.png">
        <p>Efetuar Cadastro no Sistema </p>
        <form>
          <input type="text" id="name" placeholder="Nome completo">
          <input type="cpf" id="cpf" placeholder="CPF">
          <input type="email" id="email" placeholder="Email">
          <input type="submit" value="Concluir" id="btn-create-user">
        </form>
        <p class="msg-error"></p>
        <button id="btn-back">Voltar</button>
    `;
    // <input type="password" id="password" placeholder="Senha">
    // <input type="password" id="password-repeat" placeholder="Confirmação de Senha">


  container.innerHTML = template;

  //guarda valores dos inputs em variáveis
  const name = container.querySelector('#name');
  const email = container.querySelector('#email');
  // const password = container.querySelector('#password');
  // const passwordRepeat = container.querySelector('#password-repeat');
  const btnRegister = container.querySelector('#btn-create-user');
  const errorMessage = container.querySelector('.msg-error');
  const btnBack = container.querySelector('#btn-back');

  //cadastro com email e senha e erros 
  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    const validation = validateRegister(
      name.value,
      email.value,
      // password.value,
      // passwordRepeat.value,
    );
    if (validation === '') {
      signinUserEmail(email.value, password.value, name.value)
        .then(() => updateProfile(auth.currentUser, {
          displayName: name.value,
        }))
        .then(() => {
          redirect('#login');
        })
        .catch((error) => {
          const errorFirebase = errorsFirebase(error.code);
          errorMessage.innerHTML = errorFirebase;
        });
    } else {
      errorMessage.innerHTML = validation;
    }
  });

  //botão para voltar pro login
  btnBack.addEventListener('click', (event) => {
    event.preventDefault();
       redirect('#login');
  });
  return container;
};
