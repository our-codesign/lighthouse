import styled from "styled-components";
import colors from "../../contants/colors";
import { breakpoints } from "../../contants/breakpoints";

export const TrustContainer = styled.section`
  margin-top: -185px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  position: relative;
  z-index: 1;
  @media ${breakpoints.md} {
    margin-top: -300px;
  }
`;

export const LabelSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  background-color: ${colors.primary};
  padding: 1rem;
  height: 12vh;

  @media ${breakpoints.md} {
    flex-direction: column;
    height: 20vh;
  }
`;

export const Label = styled.h2`
  color: ${colors.secondary};
  text-align: center;
  font-size: 2vw;
  margin: 1rem;
  text-transform: uppercase;
  border-right: 2px solid ${colors.secondary};
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;

  &:last-child {
    border-right: none;
  }

  @media ${breakpoints.md} {
    border-right: none;
    width: 80%;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 2px solid ${colors.secondary};
    font-size: 25px;
  }
`;

export const ControlSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: ${colors.primary};
  justify-content: center;
  gap: 7rem;

  @media ${breakpoints.md} {
    flex-direction: column;
    text-align: center;

    gap: 4rem;
  }
`;

export const ImageContainer = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 75%;
    width: auto;
  }

  @media ${breakpoints.lg} {
    height: 50%;
  }

  @media ${breakpoints.md} {
    width: 90%;
  }
`;

export const TextContainer = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  justify-content: center;
  color: white;
  text-transform: uppercase;

  h2 {
    margin-bottom: 1rem;
    width: 80%;
    color: white;
    font-size: 3rem;
    font-weight: bold;
  }

  p {
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  @media ${breakpoints.lg} {
    h2 {
      font-size: 35px;
    }

    p {
      font-size: 22px;
    }
  }

  @media ${breakpoints.md} {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
