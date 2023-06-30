import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
  background-color: #0b1c38;
`;

export const CardText = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: blue;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .email {
    width: 100%;
  }
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

export const Input = styled.input`
  width: 325px;
  height: 64px;
  background: #ffffff;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
  border: none;
`;

export const TextArea = styled.textarea`
  height: 200px;
  background: #ffffff;
  border-radius: 5px;
  padding: 10px;
`;

export const FooterItem = styled.div`
  color: white;
  margin: 4px 0;
  width: 65%;
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

export const MainSessionTitle = styled.h1`
  text-align: center;
  font: normal normal normal 45px Aboreto;
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
  width: 70%;
  height: 7px;
  transform: matrix(-1, 0, 0, -1, 0, 0);
  z-index: 999;
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 300px;
`;
