import styled from "styled-components";
import Card from './Card';

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

  /* ::-webkit-scrollbar {
    display: none;
  } */
`;

export const ListItem = styled(Card)``;


