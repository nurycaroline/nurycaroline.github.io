import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.gradients.blueGreen90};
  padding-bottom: 20px;
`;

export const Item = styled.div`
  background: #fbfbfb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  max-width: 410px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 20px;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 20px;
  }

  img {
    max-width: 140px;
  }

  h3 {
    font: 20px/24px Fira Code;
    text-align: center;
  }

  p {
    font: 10px/12px Fira Code;
    text-align: center;
  }

  a {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: linear-gradient(102.19deg, #1d929e 0%, #46eeb4 97.12%);
    border-radius: 50px;
    width: 120px;
    height: 35px;
    color: ${({ theme }) => theme.colors.dark};
    font: 14px/35px Fira Code;
    font-weight: 500;
    text-align: center;
  }
`;
