import styled from "styled-components";
import Button from "../../micro/button";

export const Container = styled.nav`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 0.625rem 0;
    flex-direction: row;
`

export const ButtonMain = styled(Button)`
    width: auto;
    margin: 1.25rem 0;
    font-weight: bold;
    color: #ffffff;
    background-color: #2583fd;
    border-radius: 0.3125rem;
    padding: 0.75rem 1.5rem;
    margin-right: 0.625rem;

    &:hover {
        cursor: pointer;
        background-color: #2583fd78;
        color: #000000;
    }
`

export const WrapperContent = styled.div`
    width: 100%;
    padding: 2.5rem 1.875rem;

`

export const Title = styled.h2`
    font-size: 36px;
    margin-bottom: 10px;
`

export const Describe = styled.p`
     font-size: 22px;
     color: #666666;
`

export const Text = styled.p`
     font-size: 24px;
    margin-bottom: 10px;
     color: #666666;
`

export const WrapperButton = styled.div`
    width: 90%;
    display: flex;
    justify-content: flex-end;
`

export const ButtonNext = styled(Button)`
    width: auto;
    margin-bottom: 1.875rem;
    font-weight: bold;
    color: #ffffff;
    background-color: #2583fd;
    border-radius: 0.3125rem;
    padding: 0.75rem 3.375rem;
    margin-left: 0.625rem;

    &:hover {
        cursor: pointer;
        background-color: #2583fd78;
        color: #000000;
    }

`
