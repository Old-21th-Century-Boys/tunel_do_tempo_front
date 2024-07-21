import { TMember } from '@Types/membros';

import api from './api';

export const getMembers = async (): Promise<TMember[]> => {
  try {
    const { data } = await api.get('/membros');

    return data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);

    return [];
  }
};
