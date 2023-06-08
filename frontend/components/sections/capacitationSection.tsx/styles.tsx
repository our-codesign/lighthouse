import styled from "styled-components";
import colors from "../../../contants/colors";
import { breakpoints } from "../../../contants/breakpoints";

export const CapacitationContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: auto;
  padding-bottom: 50px;
  background-color: ${colors.primary};
  padding-top: 50px;

  @media ${breakpoints.lg} {
    padding-top: 100px;
    flex-direction: column;
  }
`;

export const Main = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media ${breakpoints.lg} {
    gap: 5rem;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  position: relative;
  height: auto;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 70%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

export const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpoints.lg} {
    width: 70%;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  margin-bottom: 2rem;
  text-transform: uppercase;

  @media ${breakpoints.lg} {
    width: 70%;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ListItemImage = styled.img`
  margin-right: 1rem;
`;

export const ListItemText = styled.span`
  color: ${colors.secondary};
  font-size: 2vw;
  font-weight: bolder;

  @media ${breakpoints.lg} {
    font-size: 28px;
  }

  @media ${breakpoints.md} {
    font-size: 24px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
