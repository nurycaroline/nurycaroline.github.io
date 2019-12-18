import styled from "styled-components";

export const Container = styled.h1`
  color: ${({ theme }) => theme.colors.blue2};
  font: bold 50px/63px "LivvicBold";
  text-align: center;
  padding: 50px 0 35px 0;
  text-transform: uppercase;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
`;
