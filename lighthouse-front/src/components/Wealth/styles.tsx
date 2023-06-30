import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #0b1b37;
  display: flex;
  padding-left: 150px;
  padding-top: 280px;

  @media (max-width: 884px) {
    padding: 0px;
    justify-content: center;
    flex-direction: column;
    min-height: 800px;
  }
`;

export const CardImage = styled.div`
  width: 90%;
  background-image: url("/SOBRE.png");
  background-size: cover;
  height: auto;
  background-color: red;
  margin-left: -450px;
  margin-top: -100px;

  @media (max-width: 884px) {
    margin-left: -200px;
    object-fit: contain;
    width: auto;
    height: 700px;
    margin-top: -300px;
  }
`;

export const CardText = styled.div`
  width: auto;
  height: auto;
  padding-top: 20px;
  z-index: 2;

  @media (max-width: 884px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
  }
`;

export const Title = styled.h1`
  text-align: left;
  font: normal normal normal 60px Aboreto;
  letter-spacing: 0px;
  color: #fafafa;
  width: 651px;

  @media (max-width: 884px) {
    width: 65%;
    text-align: center;
    padding-top: 200px;
    font: normal normal normal 45px Aboreto;
  }
`;

export const TitleSpan = styled.span`
  display: block;
  margin: 0px;
  width: 100%;
`;

export const Text = styled.p`
  text-align: left;
  font: normal normal normal 25px Times New Roman;
  letter-spacing: 0.6px;
  color: #fafafa;
  width: 651px;

  @media (max-width: 884px) {
    width: 65%;
    text-align: center;
    text-align: left;
    font: normal normal normal 20px Times New Roman;
  }
`;
