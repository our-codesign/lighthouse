import styled from "styled-components";
import colors from "../../contants/colors";
import { breakpoints } from "../../contants/breakpoints";

export const FirstHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${colors.primary};
  height: 130px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: all 0.5s;
  z-index: 5;
  border-bottom: 11px solid ${colors.secondary};

  &.scrolled {
    padding-left: 80px;
    padding-right: 80px;
  }

  @media ${breakpoints.md} {
    padding-left: 0px;
    padding-right: 0px;
  }
`;

export const SecondHeader = styled.header`
  position: sticky;
  top: 0px;
  background-color: ${colors.primary};
  height: 130px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 4;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  font-weight: 700;
  justify-content: center;
  margin-right: 3rem;
  width: 50%;

  @media ${breakpoints.lg} {
    width: auto;
    gap: 1rem;
  }
`;

export const MenuItem = styled.li`
  color: ${colors.secondary};
  font-size: 18px;
  list-style: none;

  @media ${breakpoints.lg} {
    font-size: 16px;
  }
`;

export const LogoImageContainer = styled.div`
  width: 100px;
  height: 60px;
  @media ${breakpoints.md} {
    width: 150px;
    height: 45px;
  }

  @media ${breakpoints.sm} {
    width: 100px;
    height: 30px;
  }
`;

export const MenuImageContainer = styled.div`
  width: 200px;
  height: 60px;

  @media ${breakpoints.md} {
    width: 150px;
    height: 45px;
  }

  @media ${breakpoints.sm} {
    width: 100px;
    height: 30px;
  }
`;
