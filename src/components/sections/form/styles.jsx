import styled from "styled-components";
import Button from "../../micro/button";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`

export const WrapperContent = styled.form`
    display: flex;
    margin: 1.25rem;
    justify-content: center;
    flex-direction: row;
    gap: 1.875rem;

    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

`

export const WrapperPrevious = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border: solid 0.125rem #999595;
    border-radius: 0.9375rem;
`

export const TitleResume = styled.h2`
    color: #000000;
    border-top: solid 0.125rem #999595;
    padding: 0.625rem;
    text-align: center;
    background-color: #9995959e;
    font-size: 1.125rem;
    font-weight: bold;

`

export const Title = styled.h2`
    color: #000000;
    border-bottom: solid 0.125rem #c4bdbd;
    padding: 0.625rem;
    text-align: center;
    background-color: #9995959e;
    border-radius: 0.75rem 0.75rem 0 0;
    font-size: 1.125rem;
    font-weight: bold;

`

export const Text = styled.p`
    color: #000000ae; 
    padding-left: 0.625rem;
    font-size: 0.875rem;
    font-weight: bold;

`

export const WrapperButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ButtonForm = styled(Button)`
    width: auto;
    margin: 1.25rem 0;
    font-weight: bold;
    color: #000000;
    background-color: #9995959e;
    border-radius: 0.3125rem;
    padding: 0.75rem 3.125rem;
    margin-left: 0.625rem;
    font-size: 1.125rem;

    &:hover {
        cursor: pointer;
        background-color: #2583fd78;
        color: #000000;
        font-weight: bold;
        scale: calc(1.03);
        box-shadow: 0rem 0.3125rem 1.25rem 0rem #2583fd;
    }

`