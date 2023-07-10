import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 30px;
  background-color: #0b1c38;

  @media (max-width: 1000px) {
    flex-direction: column;
    position: relative;
    height: 500px;
    align-items: center;
    padding: 45px 30px;
  }
`;

export const CardText = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const MainSessionTitle = styled.h1`
  text-align: center;
  font: normal normal normal 35px Aboreto;
  letter-spacing: 1px;
  color: #dbc68f;
  margin: 0;
  z-index: 999;
  width: 100%;

  @media (max-width: 1000px) {
    font: normal normal normal 25px Aboreto;
    position: absolute;
    top: 80px;
  }
`;

export const LeftDivider = styled.div`
  background: #dbc68f 0% 0% no-repeat padding-box;
  width: 80%;
  height: 3.5px;
  border-radius: 90%;
  transform: matrix(-1, 0, 0, -1, 0, 0);
  z-index: 999;
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 300px;
  max-width: 400px;
  @media (max-width: 1000px) {
    position: absolute;
    top: 110px;
  }
`;

export const CardItem = styled.div`
  @media (max-width: 1000px) {
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const FooterItem = styled.div`
  color: white;
  margin: 3px 0;
  font: normal normal bold 18px Times New Roman;
  width: 105%;
  display: flex;
  align-items: center;

  img {
    margin-right: 8px;
  }

  @media (max-width: 1000px) {
    width: auto;
    min-width: 250px;
    font: normal normal bold 15px Times New Roman;
    margin: 0px;

    img {
      width: 35px;
      height: auto;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;

  @media (max-width: 1000px) {
    align-items: center;
    width: 100%;
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .email {
    width: 100%;
  }

  @media (max-width: 1000px) {
    max-width: 600px;
    width: 95%;
  }
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 1000px) {
    gap: 15px;
  }
`;

export const Input = styled.input`
  width: 100%;
  min-width: 250px;
  height: 48px;
  background: #ffffff;
  border-radius: 4px;
  padding: 10px;
  box-sizing: border-box;
  border: none;

  @media (max-width: 1000px) {
    min-width: 100%;
    width: 100%;
  }
`;

export const TextArea = styled.textarea`
  height: 80px;
  background: #ffffff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 13px;
  margin: 0;
`;

export const InputContainer = styled.div`
  margin-bottom: 10px;
  width: 100%;
`;
