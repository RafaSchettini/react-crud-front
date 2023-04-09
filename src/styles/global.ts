import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: 'Inter', sans-serif;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }
`;
