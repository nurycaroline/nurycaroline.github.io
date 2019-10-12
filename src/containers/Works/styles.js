import styled from "styled-components";
import Card from "./Card";

export const Container = styled.div`
  background: linear-gradient(90deg, #45edb4 0%, #1d939e 100%);
  height: 100vh;
`;

export const Title = styled.h4`
  color: #24a1a2;
  font: bold 50px/63px "Livvic";
  text-align: center;
  padding: 50px 0 35px 0;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: auto;
  padding: 20px;

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
