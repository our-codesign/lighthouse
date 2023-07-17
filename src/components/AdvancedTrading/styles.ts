import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 700px;
  background-color: #0b1c38;
  display: flex;
  position: relative;
  box-shadow: inset 0px 0px 40px 40px #0b1c38;
  @media (max-width: 884px) {
    flex-direction: column-reverse;
  }
`;
export const Filter = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  opacity: 0.4;
  background-color: #0b1c38;
`;
export const CardImage = styled.div`
  background-image: url("/BLOG.webp");
  width: calc(50% + 15%);
  background-size: cover;
  box-shadow: inset 0px 0px 40px 40px #0b1c38;
  height: auto;
  margin-right: -15%;
  @media (max-width: 1025px) {
    background-size: 80vw 100%;
    background-repeat: no-repeat;
  }
  @media (max-width: 884px) {
    width: 100%;
    height: 400px;
    margin-right: 0;
    margin-left: -10%;
    background-size: cover;
  }
`;

export const CardText = styled.div`
  width: 50%;
  padding: 10% 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 9999;
  @media (max-width: 1025px) {
    padding: 15% 0 0 0;
  }
  @media (max-width: 884px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    width: 100%;
  }
`;

export const MainSessionTitle = styled.h1`
  text-align: center;
  font: normal normal normal 50px/62px Aboreto;
  letter-spacing: 1px;
  color: #dbc68f;
  margin: 0;
  z-index: 999;
  width: 100%;

  @media (max-width: 884px) {
    font: normal normal normal 40px Aboreto;
  }
  @media (max-width: 650px) {
    font: normal normal normal 25px Aboreto;
  }
`;

export const LeftDivider = styled.div`
  background: #dbc68f 0% 0% no-repeat padding-box;
  width: 85%;
  height: 3.5px;
  border-radius: 90%;

  transform: matrix(-1, 0, 0, -1, 0, 0);
  z-index: 999;
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 300px;
`;

export const MainSessionDescription = styled.p`
  text-align: center;
  font: normal normal 500 20px/31px Open Sans;
  letter-spacing: 0px;
  color: #fafafa;
  white-space: nowrap;
  opacity: 1;
  z-index: 999;
  margin: 0;
  margin-bottom: 40px;
  margin-top: 10px;
  font: normal normal 500 25px Open Sans;

  @media (max-width: 1225px) {
    font: normal normal 500 20px Open Sans;
  }

  @media (max-width: 650px) {
    font: normal normal 500 14px Open Sans;
  }
`;

export const DescriptionSpan = styled.span`
  display: block;
  margin: 0px;
  width: 100%;
`;
