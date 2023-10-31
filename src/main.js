import './lib/config.js';
import { login } from './pages/login/login.js';
import { home } from './pages/timeline/home.js';
import { usuario } from './pages/timeline/usuario.js';
import { comparaai } from './pages/timeline/comparaai.js';
import { register } from './pages/register/register.js';
import { statusUser } from './lib/auth.js';

const container = document.querySelector('#root');

//rotas para navegação dinâmica numa página html só
const routes = async () => {
  container.innerHTML = '';
  switch (window.location.hash) {
    case '#login':
      container.appendChild(login());
      break;
    case '#home':
      statusUser(async (logged) => {
        if (logged) {
          container.appendChild(await home());
        } else {
          container.appendChild(login());
        }
      });
      break;
    case '#usuario':
      statusUser(async (logged) => {
        if (logged) {
          container.appendChild(await usuario());
        } else {
          container.appendChild(login());
        }
      });
      break;
    case '#comparaai':
      statusUser(async (logged) => {
        if (logged) {
          container.appendChild(await comparaai());
        } else {
          container.appendChild(login());
        }
      });
      break;
    case '#register':
      container.appendChild(register());
      break;
    default:
      container.appendChild(login());
  }
};

window.addEventListener('hashchange', routes);

window.addEventListener('load', routes);
