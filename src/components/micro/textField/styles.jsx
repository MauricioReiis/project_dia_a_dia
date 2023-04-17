import styled from "styled-components";

export const Label = styled.label`
    position: relative;
    width: 100%;
    font-weight: bold;
    color: #000000;
    font-size: 0.9375rem;

`

export const Text = styled.span`
    position: absolute;
    width: 100%;
    color: #000000ae;
    left: 0.625rem;
    top: 1.6875rem;
    font-size: 0.875rem;
`

export const Input = styled.input`
    width: 100%;
    height: 3.4375rem;
    margin: 0.1875rem 0rem 0.625rem 0rem ;
    padding-top: 1.25rem;
    padding-left: 0.625rem;
    color: #6d6161;
    font-weight: bold;
    border-radius: 0.625rem;
    border: 0.125rem solid #999595;
    background-color: #ffffff;
    outline: none;

   ::placeholder {
    color: #03a4e4;
    font-size: 0.9375rem;
   }
  
`


