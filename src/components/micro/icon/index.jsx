import React from 'react';
import * as S from './styles';

const Icon = ({src, alt, ...props}) => {
    return (
        <S.Container>
            <S.Image {...props} src={src} alt={alt} />
        </S.Container>
    );
}

export default Icon;