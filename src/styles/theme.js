import { keyframes } from "styled-components";

const theme = {
  colors: {
    blue: "#198a9c",
    blue2: "#24a1a2",
    green: "#41e4a4",
    green2: "#35CBB8",
    dark: "#333",
    darkLight: "#505050",
    greyDark: " #5d5a5c",
    greyLight: " #B3AFB2",
    white: "#FFFFFF"
  },
  gradients: {
    greenBlue270: `linear-gradient(270deg, #198a9c 0%, #46efb4 99.99%)`,
    greenBlue90: `linear-gradient(90deg, #45edb4 0%, #1d939e 100%)`
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
