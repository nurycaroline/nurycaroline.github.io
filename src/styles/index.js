import styled from "styled-components";

const Animation = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: calc(100vh / 2);
`;

export const AnimationToTop = styled(Animation)`
  animation: ${({ theme }) => theme.slideTop} 2s forwards;
  background: ${({ theme }) => theme.gradients.greenBlue270};
`;

export const AnimationToBotton = styled(Animation)`
  margin-top: calc(101vh / 2);
  animation: ${({ theme }) => theme.slideBotton} 2s forwards;
  background: ${({ theme }) => theme.gradients.greenBlue270};
`;
