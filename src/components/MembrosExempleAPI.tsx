import React, { useEffect, useState } from 'react';

import api from '../services/api';

type Member = {
  id: number;
  nome: string;
};

const ExampleComponent: React.FC = () => {
  const [data, setData] = useState<Member[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/membros');
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Dados da API</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
