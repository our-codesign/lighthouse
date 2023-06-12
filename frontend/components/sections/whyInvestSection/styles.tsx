import styled from "styled-components";
import colors from "../../../contants/colors";
import { breakpoints } from "../../../contants/breakpoints";

export const WhyInvestContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: ${colors.primary};
  padding-bottom: 50px;

  @media ${breakpoints.lg} {
    justify-content: center;
    height: auto;

    h2 {
      width: 100%;
    }
  }
  @media ${breakpoints.md} {
    padding-top: 100px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary};
  width: 70%;

  @media ${breakpoints.lg} {
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  font-weight: bold;

  li {
    margin-top: 1.4rem;
  }
`;

export const ListItem = styled.li`
  display: flex;
  font-weight: bolder;
`;

export const ListItemNumber = styled.span`
  color: white;
  font-size: 2vw;
  margin-right: 0.8rem;

  @media ${breakpoints.lg} {
    font-size: 35.7px;
  }

  @media ${breakpoints.md} {
    font-size: 24px;
  }
`;

export const ListItemText = styled.span`
  color: ${colors.secondary};
  font-size: 2vw;

  @media ${breakpoints.lg} {
    font-size: 35.7px;
  }

  @media ${breakpoints.md} {
    font-size: 24px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media ${breakpoints.lg} {
    margin-top: 4vh;
  }
`;
