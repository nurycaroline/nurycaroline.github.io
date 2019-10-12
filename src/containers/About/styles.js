import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  height: 600px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkLight};
  font: bold 50px/63px "LivvicBold";
  text-align: center;
  padding: 50px 0 35px 0;
`;

export const SkillsGroup = styled.div`
  max-width: 850px;
  height: 140px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const Skill = styled.div`
  min-width: 350px;
  padding: 20px 0;

  h2 {
    color: ${({ theme }) => theme.colors.white};
    font: 20px/25px "LivvicBold";
  }
  li {
    color: ${({ theme }) => theme.colors.greyLight};
    font: 20px/24px "FiraCodeRegular";
  }
`;
