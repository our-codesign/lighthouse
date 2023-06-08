import styled from "styled-components";
import { breakpoints } from "../../../contants/breakpoints";

export const ParentCard = styled.section`
  background-image: url("lineBlur.jpg");
  background-size: cover;
  width: 100%;
  height: 32vh;
  min-height: 200px;
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${breakpoints.lg} {
    height: auto;
    padding: 40px 0px;
  }
`;

export const ChildCard = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;

  @media ${breakpoints.lg} {
    flex-direction: column;
    gap: 30px;
    width: 100%;
  }
`;

export const ContainerText = styled.div`
  height: 100%;
  width: 43%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${breakpoints.lg} {
    width: 50%;
    align-items: center;
  }
  @media ${breakpoints.md} {
    width: 80%;
  }
`;

export const Title = styled.p`
  color: black;
  text-align: left;
  margin-bottom: -5px;
  font-size: 3vw;
  text-transform: uppercase;

  @media ${breakpoints.lg} {
    font-size: 50px;
  }

  @media ${breakpoints.md} {
    font-size: 35px;
  }
`;
