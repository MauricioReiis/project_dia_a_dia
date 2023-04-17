import React, { useState } from "react";
import Aside from "../aside";
import * as S from './styles';
import Form from "../form";
import ContentMain from "./content";
import Carrossel from "../carrossel";

const Main = () => {
    const pages = [<ContentMain/>, <Form/>, <Carrossel/>];
    const [page, setPage] = useState(0);

    const handlePage = () => {
        const maxPage = pages.length - 1;
        if (page >= maxPage) {
            setPage(0);
        } else {
            setPage(page + 1);
        }
    }

    return (
        <S.Container>
            <S.Wrapper>
                <Aside/>
                {page === 0 && <ContentMain/>}
                {page === 1 && <Form/>}
                {page === 2 && <Carrossel/>}
            </S.Wrapper>
            <S.WrapperButton>
                <S.ButtonNext onClick={handlePage} children='Next' />
            </S.WrapperButton>
        </S.Container>
    );
}



export default Main;