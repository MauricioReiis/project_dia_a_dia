import styled from "styled-components";

export const Container = styled.nav`
    width: 21.875rem;
    display: flex;
    background-color: #f2f2f2;
    padding: 0.625rem;
    border-radius: 0.625rem;
    height: 50vh;
    
`

export const Wrapper = styled.div`
    width: 100%;
    background-color: #ffffff;
    border-radius: 0.625rem;

`

export const Text = styled.p`
    font-size: 1.25rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border: solid 0.0625rem #f2f2f2;

    &:hover {
        background-color: #58585856;
    }
`