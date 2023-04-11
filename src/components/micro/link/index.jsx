import React from "react";
import * as S from './styles';

const Link = ({ children, href, ...props }) => {
    return(
        <S.Link {...props} href={href}>{children} </S.Link>
    )
}

export default Link;