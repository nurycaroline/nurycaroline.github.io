import styled from "styled-components";

const Animation = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
`;

export const AnimationToTop = styled(Animation)`
  animation: ${({ theme }) => theme.slideTop} 2s forwards;
  z-index: 2;
  height: 53vh;
  background: ${({ theme }) => theme.gradients.greenBlue270};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
`;

export const AnimationToBotton = styled(Animation)`
  z-index: 1;
  height: 54vh;
  bottom: 0;
  background: ${({ theme }) => theme.gradients.greenBlue270};
  animation: ${({ theme }) => theme.slideBotton} 2s forwards;

  clip-path: polygon(0 0, 100% calc(100% - 35vw), 100% 100%, 0% 100%);
`;
