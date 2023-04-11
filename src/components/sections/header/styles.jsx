import styled from "styled-components";
import Link from "../../micro/link";
import Button from "../../micro/button";

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f8f9fa;
    padding: 20px 0;
`
export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const WrapperLinks = styled.div`
    display: flex;
    width: auto;
    gap: 20px;
`

export const Links = styled(Link)`
    color: #474646;
    font-size: 1.125rem;
    align-self: center;

    &:hover {
        color: #000000;
    }

    @media (max-width: 1293px) {
        display: none;
    }
`

export const ButtonHeader = styled(Button)`
    color: #ffffff;
    background-color: #2583fd;
    border-radius: 0.3125rem;
    padding: 12px 24px;

    &:hover {
        cursor: pointer;
        box-shadow: 0px 5px 20px 0px #2583fd;
    }
`

export const Image = styled.img`
    max-width: 18rem;
`