import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 2;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white};
  overflow-y: auto;
  animation-delay: 1.2s;
  animation: ${({ theme }) => theme.fadeIn} 4s;
`;
