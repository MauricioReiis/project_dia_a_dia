import styled from "styled-components";

export const Container = styled.nav`
    width: 19.375rem;
    display: flex;
    background-color: #f2f2f2;
    padding: 0.625rem;
    border-radius: 0.625rem;

    @media (max-width: 768px) {
        display: none;
    }
    
`

export const Wrapper = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 0.625rem;
`

export const Text = styled.p`
    font-size: 1.125rem;
    padding: 0.5rem 0.625rem;
    cursor: pointer;

    &:hover {
        background-color: #2583fd;
        border-radius: 0.625rem;
        color: #ffffff;
    }
`