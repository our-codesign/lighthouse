import styled from "styled-components";
import colors from "../../../contants/colors";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${colors.primary};
  border-top: 10px solid ${colors.secondary};
  display: flex;
  margin-top: 10rem;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;
`;

export const FooterBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: ${colors.secondary};
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  height: 200px;
  width: 180px;

  .title {
    font-size: 22px;
  }

  .hidden {
    opacity: 0;
  }

  @media screen and (max-width: 768px) {
    margin: 20px 10px;
  }
`;

export const FooterItem = styled.div`
  color: white;
  margin: 7px 0;

  img {
    margin-right: 8px;
  }
`;
