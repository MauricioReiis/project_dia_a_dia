import React, { useState } from "react";
import Aside from "../aside";
import * as S from './styles';

const Main = ({title, descricao,buttonText, buttonText2, idade, mensalidadeText}) => {
    const [contagem, setContagem] = useState(1)
    const [mensalidade, setMensalidade] = useState(0)
   
    const manipulaIdade =() => {
        setContagem(contagem + 1)
        if (contagem < 30) {
            setMensalidade(1000 - ((contagem/100)*1000))
        }
        else{
            setMensalidade((1000 - (30/100)*1000))
        }
    }

    const ResetaIdade =() => {
        setContagem(1)
        setMensalidade(0)
    }

    return (
        <S.Container>
            <S.Wrapper>
            <Aside/>
            <S.WrapperContent>
                <S.Title>{title}</S.Title>
                <S.Describe>{descricao}</S.Describe>
                <S.ButtonMain onClick={manipulaIdade} children={buttonText} />
                <S.ButtonMain onClick={ResetaIdade} children={buttonText2} />
                <S.Text>{idade} {contagem} </S.Text>
                <S.Text>{mensalidadeText}{mensalidade} </S.Text>
            </S.WrapperContent>
            </S.Wrapper>
        </S.Container>
    );
}

Main.defaultProps = {
    title: "Inscreva-se para um de nossos cursos",
    descricao: 'O desconto é concedido a todos de acordo com a idade.',
    buttonText: 'Aumentar idade',
    buttonText2: 'Resetar idade',
    idade: 'Idade:',
    mensalidadeText: 'Mensalidade a pagar: R$'
}

export default Main;