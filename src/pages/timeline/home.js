import {
  auth,
  logout,
} from '../../lib/auth.js';

import { redirect } from '../../redirect.js';

export const home = async () => {
  const container = document.createElement('div');
  container.setAttribute('id', 'container-home');

  //código html
  container.innerHTML = `
    <section id="header-home">
        <figure>
          <img id="logo-home" class="logo" src="assets/logo2.png">
        </figure>
        <div>
          <p> Olá, ${auth.currentUser.displayName}!</p>
        </div>
    </section>  
    <section id="body-home">
      <div>
        <button id="btn-usuario">USUARIO</button>
        <button id="btn-parceiro">PARCEIRO</button>
        <button id="btn-comparaai">COMPARAAI</button>
        <button id="btn-alugar">ALUGAR</button>
        <button id="btn-vender">VENDER</button>
        <button id="btn-administrador">ADMINISTRADOR</button>
      </div>
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
  const btnUsuario = container.querySelector('#btn-usuario');
  const btnParceiro = container.querySelector('#btn-parceiro');
  const btnComparaai = container.querySelector('#btn-comparaai');
  const btnAlugar = container.querySelector('#btn-alugar');
  const btnVender = container.querySelector('#btn-vender');
  const btnAdministrador = container.querySelector('#btn-administrador');
  const btnLogout = container.querySelector('#btn-logout');
  const btnHome = container.querySelector('#btn-home');

  //botão comparaai
  btnComparaai.addEventListener('click', () => {
    redirect('#comparaai');
  });

  //botao usuario
  btnUsuario.addEventListener('click', () => {
    redirect('#usuario');
  });

  //botão que navega para o topo da página
  btnHome.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
