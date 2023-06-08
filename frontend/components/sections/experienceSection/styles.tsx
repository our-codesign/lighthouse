import styled from "styled-components";
import colors from "../../../contants/colors";
import { breakpoints } from "../../../contants/breakpoints";

export const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary};
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
  height: auto;
`;

export const MainTitle = styled.h2`
  color: ${colors.secondary};
  font-size: 3vw;
  text-transform: uppercase;
  margin-bottom: -2px;

  @media ${breakpoints.lg} {
    text-align: center;
  }

  @media ${breakpoints.md} {
    font-size: 30px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 1.8vw;
  text-transform: uppercase;
  margin-top: 0;
  font-weight: bolder;

  @media ${breakpoints.lg} {
    text-align: center;
  }

  @media ${breakpoints.md} {
    font-size: 30px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  width: 80%;
  height: auto;
  margin-top: 8vh;
  margin-bottom: 8vh;
  flex-wrap: wrap;
  gap: 3rem;
`;

export const CustomCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary};
  border: 4px solid ${colors.secondary};
  box-shadow: 0px 0px 15px ${colors.secondary};
  border-radius: 20px;
  width: 17vw;
  min-width: 320px;
  height: 40vh;
  box-sizing: border-box;
  padding-top: 2rem;
  text-transform: uppercase;

  .title {
    color: ${colors.secondary};
    text-align: center;
    font-size: 1.5vw;
  }

  p {
    width: 90%;
    color: white;
    text-align: center;
    margin-bottom: 3px;
  }

  @media ${breakpoints.md} {
    width: 100%;

    .title {
      font-size: 25px;
    }

    p {
      font-size: 18px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
