import {
  auth,
  logout,
} from '../../lib/auth.js';

import { saveVeiculo } from '../../lib/firestore.js';
import { redirect } from '../../redirect.js';

export const timeline = async () => {
  const container = document.createElement('div');
  container.setAttribute('id', 'container-timeline');

  //código html
  container.innerHTML = `
    <section id="header-timeline">
        <figure>
          <img id="logo-timeline" class="logo" src="assets/logo2.png">
        </figure>
        <div>
          <p> Olá, ${auth.currentUser.displayName}!</p>
        </div>
    </section>  
    <section id="body-timeline">
      <h3>Custos do seu veículo atual</h3>
      <form id="form-veiculo">
        <div>
          <p>IPVA</p>
          <label>R$:</label> <input type="number" id="IPVA">
        </div>
        <div>
          <p>Estacionamento</p>
          <label>R$:</label> <input type="number" id="estacionamento">
        </div>
        <div>
          <p>Seguro</p>
          <label>R$:</label> <input type="number" id="seguro">
        </div>
        <div>
          <p>Lavação</p>
          <label>R$:</label> <input type="number" id="lavacao">
        </div>
        <div>
          <p>Revisão</p>
          <label>R$:</label> <input type="number" id="revisao">
        </div>
        <div>
          <p>Combustível</p>
          <label>R$:</label> <input type="number" id="combustivel">
        </div>
        <div>
          <p>Manutenção Corretiva</p>
          <label>R$:</label> <input type="number" id="man-corretiva">
        </div>
        <div>
          <p>Manutenção Preventiva</p>
          <label>R$:</label> <input type="number" id="man-preventiva">
        </div>
        <div>
          <p>Licenciamento</p>
          <label>R$:</label> <input type="number" id="licenciamento">
        </div>
        <div>
          <p>Depreciação</p>
          <input type="number" id="depreciacao"> <label>%</label>
        </div>
      </form>
      <button id="btn-favoritar">Favoritar veículo</button>
      <h3>Dados do carro a ser alugado</h3>
      <form id="form-aluguel">
        <div>
          <p>Estado</p>
          <input type="text" id="estado">
        </div>
        <div>
          <p>Cidade</p>
          <input type="text" id="cidade">
        </div>
        <div>
          <p>Categoria</p>
          <input type="text" id="categoria">
        </div>
        <div>
          <p>Tempo de aluguel</p>
          <input type="text" id="tempo">
        </div>
      </form>
      <button id="btn-comparar">COMPARAR</button><br>
      <button id="btn-pdf">Salvar em PDF</button><br>
      <button id="btn-apagar">Apagar todos os campos</button>
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
  const btnFavoritar = container.querySelector('#btn-favoritar');
  const btnLogout = container.querySelector('#btn-logout');
  const btnHome = container.querySelector('#btn-home');

  //cria o objeto para guardar na coleção do banco de dados do Firestore
  btnFavoritar.addEventListener('click', (event) => {
    event.preventDefault();
    const veiculo = {
        IPVA: container.querySelector('#IPVA').value,
        Estacionamento: container.querySelector('#estacionamento').value,
        Seguro: container.querySelector('#seguro').value,
        'Lavação': container.querySelector('#lavacao').value,
        'Revisão': container.querySelector('#revisao').value,
        'Combustível': container.querySelector('#combustivel').value,
        'Manutenção Corretiva': container.querySelector('#man-corretiva').value,
        'Manutenção Preventiva': container.querySelector('#man-preventiva').value,
        Licenciamento: container.querySelector('#licenciamento').value,
        Depreciação: container.querySelector('#depreciacao').value,
        date: new Date(),
        author: auth.currentUser.displayName,
        userUid: auth.currentUser.uid,
      };
    saveVeiculo(veiculo).then(() => {
      container.querySelector('form').reset();
      window.location.reload();
    });
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
