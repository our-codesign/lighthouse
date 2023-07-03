import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 700px;
  width: 100%;
  background-color: #0b1b37;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  padding-bottom: 80px;

  @media (max-width: 1350px) {
    flex-direction: column-reverse;
    padding-bottom: 0px;
  }
`;

export const CardImage = styled.div`
  width: 60%;
  background-image: url("/BLOG.png");
  background-size: cover;
  height: 700px;

  @media (max-width: 1350px) {
    width: auto;
    min-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
    height: auto;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const CardText = styled.div`
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: -320px;

  @media (max-width: 1350px) {
    width: 80%;
    height: 50%;
    margin-left: -0px;
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
  height: 7px;
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
  opacity: 1;
  z-index: 999;
  margin: 0;
  margin-bottom: 40px;
  margin-top: 10px;
  font: normal normal normal 35px Times New Roman;

  @media (max-width: 884px) {
    font: normal normal 500 20px Open Sans;
  }
  @media (max-width: 650px) {
    font: normal normal 500 15px Open Sans;
  }
`;

export const DescriptionSpan = styled.span`
  display: block;
  margin: 0px;
  width: 100%;
`;
