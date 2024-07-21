import { getMembers } from '@Services/members';
import { TMember } from '@Types/membros';
import React, { useEffect, useState } from 'react';

import * as S from './style';

const MembersList: React.FC = () => {
  const [data, setData] = useState<TMember[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading((curr) => !curr);

      const membersArray = await getMembers();
      setData(membersArray);

      setIsLoading((curr) => !curr);
    };

    fetchData();
  }, []);

  return (
    <S.Wrapper>
      <S.Title>Dados da API</S.Title>
      <S.List>
        {isLoading ? (
          <h2>Carregando membros...</h2>
        ) : data.length > 0 ? (
          data.map((memberInArray, index) => (
            <S.ListElement key={index}>{memberInArray.nome}</S.ListElement>
          ))
        ) : (
          <h2>Nenhum membro encontrado</h2>
        )}
      </S.List>
    </S.Wrapper>
  );
};

export default MembersList;
