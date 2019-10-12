import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Fira+Code:300,400,500,600|Livvic:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Fira Code", monospace;
    color: ${({ theme }) => theme.colors.dark};
  }

  html { height: 100%; }

  body{
    background: #333;
    overflow-y: hidden;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
  }
`;
