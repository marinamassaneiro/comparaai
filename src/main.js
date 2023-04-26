import './lib/config.js';
import { login } from './pages/login/login.js';
import { timeline } from './pages/timeline/timeline.js';
import { register } from './pages/register/register.js';
import { statusUser } from './lib/auth.js';

const container = document.querySelector('#root');

const routes = async () => {
  container.innerHTML = '';
  switch (window.location.hash) {
    case '#login':
      container.appendChild(login());
      break;
    case '#timeline':
      statusUser(async (logged) => {
        if (logged) {
          container.appendChild(await timeline());
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
