import React from "react";
import * as S from './styles';
import Logo from "../../../assets/logoFooter.png";
import icone1 from "../../../assets/logo1.png";
import icone2 from "../../../assets/logo2.png";
import icone3 from "../../../assets/logo3.png";
import icone4 from "../../../assets/logo4.png";
import icone5 from "../../../assets/logo6.png";
import icone6 from "../../../assets/logo7.png";
import {Institucional, Acesso, Servicos} from "../../utils/footerMock";
import Icon from "../../micro/icon";

const Footer = ({titleOne,titleTwo, titleThree}) => {
    return (
        <S.Container>
            <S.Wrapper>
                <S.Logos>
                    <S.Image src={Logo} />
                    <S.WrapperIcones>
                        <Icon src={icone1} alt='Image 1' />
                        <Icon src={icone2} alt='Image 2' />
                        <Icon src={icone3} alt='Image 3' />
                        <Icon src={icone4} alt='Image 4' />
                        <Icon src={icone5} alt='Image 5' />
                        <Icon src={icone6} alt='Image 6' />
                    </S.WrapperIcones>
                </S.Logos>
                <S.Insitucional>
                    <S.Title>{titleOne}</S.Title>
                    {Institucional.map((value, i) => (
                    <S.Text key={i}>{value.nome} </S.Text>
                    ))}
                </S.Insitucional>
                <S.Acesso>
                    <S.Title>{titleTwo}</S.Title>
                    {Acesso.map((value, i) => (
                    <S.Text key={i}>{value.nome} </S.Text>
                ))}
                </S.Acesso>
                <S.Servicos>
                    <S.Title>{titleThree}</S.Title>
                    {Servicos.map((value, i) => (
                    <S.Text key={i}>{value.nome} </S.Text>
                ))}
                </S.Servicos>
            </S.Wrapper>
        </S.Container>
    )
}

Footer.defaultProps = {
    titleOne: "Institucional",
    titleTwo: "Acesso rápido",
    titleThree: "Serviços",

}

export default Footer;