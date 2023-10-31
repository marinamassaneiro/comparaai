import {
  auth,
  logout,
} from '../../lib/auth.js';

import { redirect } from '../../redirect.js';

export const usuario = async () => {
  const container = document.createElement('div');
  container.setAttribute('id', 'container-usuario');

  //código html
  container.innerHTML = `
    <section id="header-usuario">
        <figure>
          <img id="logo-usuario" class="logo" src="assets/logo2.png">
        </figure>
        <div>
          <p> Olá, ${auth.currentUser.displayName}!</p>
        </div>
    </section>  
    <section id="body-usuario">
      <h3>Perfil do usuário</h3>
      <h4>Os dados inseridos abaixo correspondem a valores anuais</h4>
        <div>
          <p>R$</p>
          <p>R$</p>
          <p>R$</p>
          <p>R$</p>
          <p>R$</p>
          <p>R$</p>
          <p>R$</p>
          <p>R$</p>
        </div>
      <button id="btn-editar">EDITAR</button>
      <button id="btn-apagar">APAGAR</button>
    </section>
    <footer>
      <nav>
        <ul>
          <li><a id="btn-home"><i class="fa-solid fa-house fa-2xl"></i></a></li>
          <li><a id="btn-settings"><i class="fa fa-cog fa-2xl" aria-hidden="true"></i></a></li>
          <li><a id="btn-logout"><i class="fa-solid fa-right-from-bracket fa-2xl"></i></a></li>
        </ul>
      </nav>
    </footer>
    `;

  //atribuindo os botões a variáveis
  const btnEditar = container.querySelector('#btn-editar');
  const btnApagar = container.querySelector('#btn-apagar');
  const btnLogout = container.querySelector('#btn-logout');
  const btnHome = container.querySelector('#btn-home');


  //botão que navega para o topo da página
  btnHome.addEventListener('click', (event) => {
    redirect('#home');
  });

  //botão logout
  btnLogout.addEventListener('click', () => {
    logout()
      .then(() => {
        redirect('#login');
      });
  });
  return container;
};
