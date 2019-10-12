import styled from "styled-components";
import Card from "./Card";

export const Container = styled.div`
  background: ${({ theme }) => theme.gradients.greenBlue90};
  padding-bottom: 20px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.blue2};
  font: bold 50px/63px "LivvicBold";
  text-align: center;
  padding: 50px 0 35px 0;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
  padding: 0 20px;

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.green2};
    height: 5px;
  }
  ::-webkit-scrollbar {
    width: 12px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.green2};
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 10px;
    height: 4px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
`;

export const ListItem = styled(Card)``;
