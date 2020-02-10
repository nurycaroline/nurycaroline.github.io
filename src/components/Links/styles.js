import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin-left: auto;
  margin-right: auto;

  a {
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.7);
    width: 40px;
    height: 40px;
    line-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin: auto;
      display: block;
    }
  }
`;
