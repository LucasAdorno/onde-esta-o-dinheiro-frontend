import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Poppins', sans-serif;
  }

  html {
    --background-color: #e0e0e0;
    --primary-color: #133964;
    --secondary-color: #C12727;
    --footer-text-color: #565656;
    --subcontainers-background: #D3D3D3;
    --chart-bar-color: #00588a;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: #222222;
    background: var(--background-color);
  }
  button, select {
    outline: none;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;

    cursor: pointer;
  }
`;
