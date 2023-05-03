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

  //html da página
  const template = `
    <img class="logo" src="assets/logo.png">
    <form id="form-login">
      <input type="email" id="email" placeholder="Usuário">
      <input type="password" id="password" placeholder="Senha">
      <input id="btn-login" type="submit" value="Entrar" />
    </form>
    <button id="btn-google">
      <img id="img-google" src="assets/google-botao.png" alt="botão de login com conta google">
      </button>
    <p class="msg-error"></p>
    <button id="btn-register">Efetuar Cadastro</button>
  `;

  container.innerHTML = template;

  //guarda valores dos inputs em variáveis
  const inputEmail = container.querySelector('#email');
  const inputPassword = container.querySelector('#password');
  const btnLogin = container.querySelector('#btn-login');
  const btnGoogle = container.querySelector('#btn-google');
  const btnRegister = container.querySelector('#btn-register');
  const errorMessage = container.querySelector('.msg-error');

  //leva para cadastro
  btnRegister.addEventListener('click', (event) => {
    event.preventDefault();
    redirect('#register');
  });

  //login com email e senha
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

  //login/cadastro com google
  btnGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    signinGoogle().then(() => {
      redirect('#timeline');
    })
      .catch((error) => error);
  });
  return container;
};
