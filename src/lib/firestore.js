//criação das funções de do banco de dados Firestore

import {
  addDoc,
  collection,
} from './exports.js';

import { db } from './config.js';

//função que cria uma coleção de objetos com os dados do veiculo que o usuário escolhe favoritar
export function saveVeiculo(veiculo) {
  const dataVeiculo = addDoc(collection(db, 'veiculos'), veiculo);
  return dataVeiculo;
}