import styled from "styled-components";
import { breakpoints } from "../../contants/breakpoints";

export interface TitleProps {
  width?: string;
  children?: any;
}

export const StyledTitle = styled.h2<TitleProps>`
  color: white;
  font-size: 3vw;
  font-weight: bold;
  margin: 0px;
  text-transform: uppercase;
  font-size: 45px;
  width: ${(props) => props.width || "auto"};
  margin-top: 0px;
  @media ${breakpoints.lg} {
    text-align: center;
  }

  @media ${breakpoints.md} {
    font-size: 30px;
  }
`;
