import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
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
    background-color: ${({ theme }) => theme.colors.dark};
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

  ul{
    list-style: none;
  }

  @font-face {
    font-family: "FiraCodeBold";
    src: url("static/fonts/Fira_Code/static/FiraCode-Bold.ttf") format("truetype");
  }
  @font-face {
    font-family: "FiraCodeLight";
    src: url("static/fonts/Fira_Code/static/FiraCode-Light.ttf")
      format("truetype");
  }
  @font-face {
    font-family: "FiraCodeMedium";
    src: url("static/fonts/Fira_Code/static/FiraCode-Medium.ttf")
      format("truetype");
  }
  @font-face {
    font-family: "FiraCodeRegular";
    src: url("static/fonts/Fira_Code/static/FiraCode-Regular.ttf")
      format("truetype");
  }
  @font-face {
    font-family: "FiraCodeSemiBold";
    src: url("static/fonts/Fira_Code/static/FiraCode-SemiBold.ttf")
      format("truetype");
  }

  @font-face {
    font-family: "LivvicRegular";
    src: url("static/fonts/Livvic/Livvic-Regular.ttf") format("truetype");
  }
  @font-face {
    font-family: "LivvicBold";
    src: url("static/fonts/Livvic/Livvic-Bold.ttf") format("truetype");
  }
`;
