import { keyframes } from "styled-components";

const theme = {
  colors: {
    blue: "#198a9c",
    green: "#41e4a4",
    green2: "#35CBB8",
    dark: "#333",
    greyDark: " #5d5a5c",
    greyLight: " #B3AFB2"
  },
  fonts: {
    firaCode: {
      bold: `
        font-family: "Fira Code", monospace;
        font-weight: 600;
      `,
      semiBold: `
        font-family: "Fira Code", monospace;
        font-weight: 500;
      `,
      regular: `
        font-family: "Fira Code", monospace;
        font-weight: 400;
      `,
      ligth: `
        font-family: "Fira Code", monospace;
        font-weight: 300;
      `
    },
    livvic: {
      regular: `
        font-family: "Livvic", sans-serif;
        font-weight: 400;
      `,
      semiBold: `
        font-family: "Livvic", sans-serif;
        font-weight: 700;
      `
    }
  },

  /* Keyframs */
  fadeIn: keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `,
  slideBotton: keyframes`
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(100%);
    }
  `,
  slideTop: keyframes`
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(-101%);
    }
  `
};

export default theme;
