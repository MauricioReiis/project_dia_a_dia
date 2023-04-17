import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    width: 100%;
    padding: 1.25rem 0;
    justify-content: center;
    border-top: solid 2px #f8f9fa;
    border-bottom: solid 2px #f8f9fa;
`

export const Wrapper = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`

export const Logos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const WrapperIcones = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1.5625rem;
`

export const Image = styled.img`
    width: 8.125rem;
`

export const Insitucional = styled.div`
    background-color: #ffffff;

    @media (max-width: 768px) {
        margin-top: 1.25rem;
        justify-content: center;
    }
`

export const Acesso = styled.div`
    background-color: #ffffff;
`

export const Servicos = styled.div`
    background-color: #ffffff;
`

export const Title = styled.h2`
    font-size: 1.25rem;
    color: #3b3a3a;
`

export const Text = styled.p`
    width: auto;
    font-size: 1rem;
    color: #777676;
    margin: 1.25rem 0;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`