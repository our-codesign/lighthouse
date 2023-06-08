import styled from "styled-components";
import { breakpoints } from "../../../contants/breakpoints";
import colors from "../../../contants/colors";

export const InviteContainer = styled.section`
  display: flex;
  background-color: ${colors.primary};
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
`;

export const Main = styled.div`
  width: 87%;
  display: flex;

  @media ${breakpoints.lg} {
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    flex-direction: column;
  }
`;

export const LeftCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  justify-content: center;
  z-index: 3;
  p {
    color: white;
    font-size: 30px;
    font-weight: bolder;
  }

  @media ${breakpoints.md} {
    width: 100%;
    margin-right: 0;
  }
`;

export const Title = styled.h2`
  color: white;
  font-size: 4vw;
  font-weight: bold;
  text-transform: uppercase;
  margin: 0;

  @media ${breakpoints.lg} {
    text-align: center;
  }

  @media ${breakpoints.md} {
    font-size: 30px;
  }

  &.larger {
    font-size: 5vw;
  }
`;

export const RightCard = styled.div<{ isMobile: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #0e578e 0%, #22806e 100%);
  cursor: pointer;
  width: ${(props) => (props.isMobile ? "100%" : "20%")};
  height: 57vh;
  width: 55%;
  border-radius: 30px;
  z-index: 2;
  margin-left: -100px;

  @media ${breakpoints.lg} {
    margin-left: 0px;
    width: 80%;
  }
  @media ${breakpoints.md} {
    height: 40vh;
    width: 90%;
  }
`;
