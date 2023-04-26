import {
  addDoc,
  collection,
} from './exports.js';

import { db } from './config.js';

export function saveVeiculo(veiculo) {
  const dataVeiculo = addDoc(collection(db, 'veiculos'), veiculo);
  return dataVeiculo;
}