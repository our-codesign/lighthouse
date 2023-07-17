import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 800px;
  background-color: #0b1c38;
  display: flex;
  position: relative;
  box-shadow: inset 0px 0px 40px 40px #0b1c38;
  @media (max-width: 884px) {
    flex-direction: column;
    min-height: 700px;
    max-height: 1050px;
    padding-top: 50px;
    padding-bottom: 50px;
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
  width: calc(50% + 15%);
  background-image: url(/SOBRE.webp);
  background-size: cover;
  box-shadow: inset 0px 0px 40px 40px #0b1c38;
  height: auto;
  margin-left: -15%;
  @media (max-width: 884px) {
    width: 100%;
    height: 400px;
    margin-left: 0;
    background-size: 100vw 40vh;
    background-repeat: no-repeat;
  }
`;

export const CardText = styled.div`
  width: 50%;
  padding: 0 0 0 10%;
  z-index: 9999;
  @media (max-width: 884px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    width: 100%;
  }
`;

export const Title = styled.h1`
  text-align: left;
  font: normal normal normal 60px Aboreto;
  color: #fafafa;
  width: 651px;
  @media (max-width: 884px) {
    text-align: center;
    font: normal normal normal 35px Aboreto;
  }
  @media (max-width: 400px) {
    text-align: center;
    font: normal normal normal 25px Aboreto;
  }
`;

export const Text = styled.p`
  text-align: left;
  font: normal normal 400 25px Times New Roman;
  letter-spacing: 0.6px;
  color: #fafafa;
  width: 651px;

  @media (max-width: 884px) {
    width: 65%;
    text-align: left;
    font: normal normal 400 20px Times New Roman;
  }
  @media (max-width: 400px) {
    font: normal normal 400 18px Times New Roman;
  }
`;
