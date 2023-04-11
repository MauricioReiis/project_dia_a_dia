import styled from "styled-components";
import Button from "../../micro/button";

export const Container = styled.nav`
    display: flex;
    width: 100%;
    justify-content: center;
`
export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
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
    margin-left: 10px;

    &:hover {
        cursor: pointer;
        background-color: #2583fd78;
    color: #000000;


    }
`

export const WrapperContent = styled.div`
    width: 100%;
    padding: 40px 30px;

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
