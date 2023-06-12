import styled from "styled-components";
import colors from "../../../contants/colors";
import { breakpoints } from "../../../contants/breakpoints";

export const ContactUsContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8vh;
  background: ${colors.primary};
`;

export const SubContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 0rem;
  @media ${breakpoints.md} {
    flex-direction: column;
    width: 100%;
    align-items: center;
    gap: 5rem;
  }
`;

export const ContactCard = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    color: ${colors.secondary};
    margin-bottom: 0px;
    font-size: 2vw;
  }

  @media ${breakpoints.lg} {
    .title {
      font-size: 40px;
    }
  }

  @media ${breakpoints.md} {
    .title {
      font-size: 30px;
    }
  }
`;

export const ContactRow = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  margin-top: 15px;

  img {
    width: 50px;
    height: auto;
    margin-right: 8px;
  }

  @media ${breakpoints.md} {
    width: 80%;
  }
`;

export const ContactInfo = styled.span`
  color: white;
  font-size: 25px;

  @media ${breakpoints.md} {
    font-size: 20px;
  }
`;

export const FormContainer = styled.form`
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 600px;

  @media ${breakpoints.md} {
    width: 70vw;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

export const Input = styled.input`
  width: 99.2%;
  border: none;
  border-radius: 4px;
  height: 60px;
  margin-bottom: 1rem;
  background: white;
  color: black;

  ::placeholder {
    color: black;
    margin-left: 100px;
    font-size: 25px;
  }
`;

export const MessageInput = styled.textarea`
  width: 99.2%;
  border: none;
  outline: none;
  border-radius: 4px;
  margin-bottom: 1rem;
  background: white;
  color: black;
  height: 110px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: ${colors.secondary};
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;
