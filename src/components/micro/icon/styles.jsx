import styled from "styled-components";

export const Container = styled.div`
    width: 1.5625rem;
    height: 1.5625rem;
    border-radius: 50%;
    background-color: #e1e6ee;
    margin: 0 0.3125rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #fcfcfc;
    }
`
export const Image = styled.img`
    width: 0.9375rem;

    &:hover {
        width: 1.25rem;

    }
`