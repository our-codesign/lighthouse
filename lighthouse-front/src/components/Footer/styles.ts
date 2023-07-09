import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: #0b1c38;
  border-top: 10px solid #dbc68f;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;

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
    font-family: marine, sans-serif;
    font-style: normal;
    font-weight: 300;
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
export const FooterTitle = styled.p`
  font-family: marine, sans-serif;
  font-style: bold;
  font-weight: 600;
  font-size: 15px;
  margin: 0;
  color: white;
`;
export const FooterItem = styled.div`
  color: white;
  margin: 4px 0;
  display: flex;
  white-space: nowrap;
  align-items: center;

  img {
    margin-right: 8px;
  }
  width: auto;
  font-size: 15px;
  @media (max-width: 768px) {
    justify-content: center;
    img {
      margin: 0 8px;
    }
  }
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none; /* no underline */
  margin: 4px 0;
  cursor: pointer;
  display: flex;
  white-space: nowrap;
  align-items: center;
  &:hover {
    border-bottom: 2px solid #dbc68f;
  }

  width: auto;
  font-size: 15px;
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
