import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  margin-right: 10px;
  height: 450px;
  width: 350px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

export const Image = styled.div`
  width: 300px;
  height: 180px;
  display: block;
  background: url(${props => props.src}) center no-repeat;
  background-size: contain;
  margin-bottom: 30px;
`;

export const ProjetcName = styled.a`
  font: 18px/22px "FiraCodeLight";
  font-weight: 500;
  margin-bottom: 10px;
  text-decoration: none;
`;

export const Company = styled.a`
  font: 14px/17px "FiraCodeMedium";
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font: 14px/18px "LivvicRegular";
`;

export const Tags = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TagItem = styled.li`
  list-style: none;
  font: 12px "FiraCodeLight";
  margin-right: 5px;
  background-color: ${({ theme }) => theme.colors.green2};
  border-radius: 30px;
  padding: 5px 10px;
`;
