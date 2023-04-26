import {
  loginUserEmail,
  signinGoogle,
} from '../../lib/auth.js';

import {
  redirect,
} from '../../redirect.js';

import {
  errorsFirebase,
  validateLogin,
} from '../../validations.js';

export const login = () => {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  container.setAttribute('id', 'container-login');

  const template = `
    <img class="logo" src="assets/logo.png">
    <form id="form-login">
      <input type="email" id="email" placeholder="Usuário">
      <input type="password" id="password" placeholder="Senha">
      <input id="btn-login" type="submit" value="Entrar" />
    </form>
    <button id="btn-google">
      <img id="img-google" src="assets/btn_google_signin_light_normal_web@2x.png" alt="botão de login com conta google">
    </button>
    <p class="msg-error"></p>
    <button id="btn-register">Efetuar Cadastro</button>
  `;

  container.innerHTML = template;

  const inputEmail = container.querySelector('#email');
  const inputPassword = container.querySelector('#password');
  const btnLogin = container.querySelector('#btn-login');
  const btnGoogle = container.querySelector('#btn-google');
  const btnRegister = container.querySelector('#btn-register');
  const errorMessage = container.querySelector('.msg-error');

  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    redirect('#register');
  });

  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const validation = validateLogin(inputEmail.value, inputPassword.value);
    if (validation === '') {
      loginUserEmail(inputEmail.value, inputPassword.value)
        .then(() => {
          container.innerHTML = '';
          redirect('#timeline');
        })
        .catch((error) => {
          const errorFirebase = errorsFirebase(error.code);
          errorMessage.innerHTML = errorFirebase;
        });
    } else {
      errorMessage.innerHTML = validation;
    }
  });

  btnGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    signinGoogle().then(() => {
      redirect('#timeline');
    })
      .catch((error) => error);
  });
  return container;
};
