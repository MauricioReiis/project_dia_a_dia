import React from 'react';
import * as S from './styles';

const TextField = ({children, text, placeholder, ...props}) => {
    return (
        <S.Label>
            {children}
            <S.Text>{text}</S.Text>
            <S.Input {...props} placeholder={placeholder} />
        </S.Label>
    )
}

export default TextField;