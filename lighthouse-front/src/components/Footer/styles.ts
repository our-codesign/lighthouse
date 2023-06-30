import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #0b1c38;
  border-top: 10px solid #dbc68f;
  display: flex;
  margin-top: 10rem;
  justify-content: center;
  position: absolute;
  align-items: center;
  padding: 50px 0px;
  bottom: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CardImage = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export const FooterColumnWrapper = styled.div`
  display: flex;
  gap: 50px;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  height: 200px;
  width: auto;

  .title {
    font-size: 22px;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-weight: bold;
    font: normal normal 900 16px/18px Marine;
  }

  .hidden {
    opacity: 0;
  }

  @media screen and (max-width: 768px) {
    margin: 20px 10px;
    align-items: center;
    text-align: center;
    height: auto;
  }
`;

export const FooterItem = styled.div`
  color: white;
  margin: 4px 0;
  display: flex;
  align-items: center;

  img {
    margin-right: 8px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    img {
      margin: 0 8px;
    }
  }
`;

export const FooterBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: #dbc68f;
`;
