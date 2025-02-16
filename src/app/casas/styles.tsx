import styled from "styled-components";

export const BackgroundTheme = styled.div `
    display: flex;
    height: calc(100vh-100px);
    flex: 1;
    background-color: ${(props) => props.theme.fundo};
    color: ${(props) => props.theme.texto};
`