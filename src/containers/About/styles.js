import styled from "styled-components";
import media from "styled-media-query";
import CTitle from "../../components/Title";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.dark};
  height: 600px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled(CTitle)`
  color: ${({ theme }) => theme.colors.white} !important;
`;

export const SkillsGroup = styled.div`
  max-width: 850px;
  height: 140px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    margin-top: 25px;
  }

  ${media.lessThan('medium')`
    a {
      margin-top: 45px;
    }
  `}
`;

export const Skill = styled.div`
  min-width: 320px;
  padding: 20px 0;

  h3 {
    color: ${({ theme }) => theme.colors.white};
    font: 20px/25px "LivvicBold";
  }
  li {
    color: ${({ theme }) => theme.colors.greyLight};
    font: 20px/24px "FiraCodeRegular";
  }
`;
