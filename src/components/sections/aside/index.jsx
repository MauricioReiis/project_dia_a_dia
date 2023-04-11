import React from 'react';
import * as S from './styles';
import {cursoMock} from "../../utils/cursos";

const Aside = () => {
  return (
    <S.Container>
        <S.Wrapper>
        {cursoMock.map((curso, i) => (
            <S.Text key={i}>{curso.nome} </S.Text>
        ))}
        </S.Wrapper>
    </S.Container>
  );
}

export default Aside;