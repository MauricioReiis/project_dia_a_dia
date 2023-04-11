import React from "react";
import * as S from './styles';
import Logo from "../../../assets/logoUniacade.png";
import {linkMock} from "../../utils/links";

const Header = ({buttonText}) => {
    return (
       <S.Container>
        <S.Wrapper>
            <S.Image draggable='false' src={Logo} alt="Logo do UniAcademia" />
            <S.WrapperLinks>
                {linkMock.map((link, i) => (
                    <S.Links key={i}  href={link.href} children={link.nome} />
                ))}
            <S.ButtonHeader children={buttonText} />
            </S.WrapperLinks>
        </S.Wrapper>
       </S.Container>
    );
}

Header.defaultProps = {
    buttonText: 'Inscreva-se'
}

export default Header;