import styled from "styled-components";
import media from "styled-media-query";
import LinksComponent from "../../components/Links";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Header = styled.header`
  img {
    width: 100%;
    min-height: 22px;
  }
`;

export const Logo = styled.div`
  text-transform: uppercase;
  margin: -10px 20px;

  span:nth-child(1) {
    font: 25px "FiraCodeBold";
    color: ${({ theme }) => theme.colors.green};
  }
  span:nth-child(2) {
    font: 25px "FiraCodeSemiBold";
    color: ${({ theme }) => theme.colors.greyLight};
    letter-spacing: 0.5px;
  }
`;

export const Body = styled.main`
  margin: auto;
  max-width: 615px;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Presentation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 25% 0 40px;
  
  p {
    color: ${({ theme }) => theme.colors.white};
    width: 100%;
  }

  p:nth-child(1) {
    font: 24px "LivvicRegular";
  }
  p:nth-child(2) {
    font-size: 24px "LivvicBold";
  }

  ${media.lessThan("medium")`flex-direction: column-reverse;`}
`;

export const Photo = styled.img`
  width: 100px;
  border-radius: 100%;

  ${media.lessThan("medium")`
    margin-bottom: 40px;
    width: 150px;
  `}
`;

export const Links = styled(LinksComponent)`
  margin-left: auto;
  margin-right: auto;
`;
