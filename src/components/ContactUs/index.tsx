import React, { useState } from "react";
import {
  ContactContainer,
  ContactForm,
  InputRow,
  Input,
  TextArea,
  FooterItem,
  MainSessionTitle,
  LeftDivider,
  CardText,
  FormContainer,
  CardItem,
  ErrorText,
  InputContainer,
} from "./styles";
import locationIcon from "../../assets/images/locationIcon.webp";
import phoneIcon from "../../assets/images/phoneIcon.webp";
import emailIcon from "../../assets/images/emailIcon.webp";
import Button from "../Button";
import Dialog from "../Dialog";
// @ts-ignore
import Loading from "react-loading-components";

const messages = {
  address: "123 MOCKUP ST, COTIA-SP",
  phone: "(+55) 11 99990-7799",
  email: "contato@lighthouseinvestimentos.com",
};

const contactInfo = [
  {
    icon: locationIcon,
    alt: "Location Icon",
    text: messages.address,
  },
  {
    icon: phoneIcon,
    alt: "Phone Icon",
    text: messages.phone,
  },
  {
    icon: emailIcon,
    alt: "Email Icon",
    text: messages.email,
  },
];

const ContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const submit = async (e: any) => {
    const errorMessage = "Campo obrigatório";
    if (!email) {
      setEmailError(errorMessage);
      return;
    }
    if (!phone) {
      setPhoneError(errorMessage);
      return;
    }
    if (!name) {
      setNameError(errorMessage);
      return;
    }
    setIsLoading(true);

    setNameError("");
    setPhoneError("");
    setEmailError("");

    e.preventDefault();
    const url =
      "https://script.google.com/macros/s/AKfycbyV9dgY_m0RnclMoPF8HKecvfoKENePbsmiF4R1yc5xIq_PKEX5cXIgEkGX3o93ymlb/exec";
    let requestBody = new FormData();
    requestBody.append("name", name);
    requestBody.append("email", email);
    requestBody.append("message", message);
    requestBody.append("phone", phone);
    fetch(url, { method: "POST", body: requestBody })
      .then((response) => {
        setIsVisible(true);
        setIsLoading(false);
      })
      .catch((error) => {
        alert("Error!");
        setIsLoading(true);
      });
  };
  return (
    <ContactContainer id="fale-conosco">
      <CardText>
        <MainSessionTitle>Fale Conosco</MainSessionTitle>
        <LeftDivider />
        <CardItem>
          {contactInfo.map((info, index) => (
            <FooterItem key={index}>
              <img src={info.icon} alt={info.alt} />
              {info.text}
            </FooterItem>
          ))}
        </CardItem>
      </CardText>

      <FormContainer>
        <ContactForm>
          <InputRow>
            <InputContainer>
              <Input
                type="text"
                name="name"
                required
                placeholder="Nome"
                style={{
                  border: nameError ? "2px solid red" : "none",
                }}
                value={name}
                onChange={(e: any) => setName(e.target.value)}
              />
              {nameError && <ErrorText>{nameError}</ErrorText>}
            </InputContainer>
            <InputContainer>
              <Input
                type="tel"
                name="phone"
                placeholder="Telefone"
                onChange={(e: any) => setPhone(e.target.value)}
                value={phone}
                required
                style={{
                  border: phoneError ? "2px solid red" : "none",
                }}
              />
              {phoneError && <ErrorText>{phoneError}</ErrorText>}
            </InputContainer>
          </InputRow>
          <InputContainer>
            <Input
              className="email"
              type="email"
              onChange={(e: any) => setEmail(e.target.value)}
              value={email}
              name="email"
              placeholder="Email"
              style={{ border: emailError ? "2px solid red" : "none" }}
              required
            />
            {emailError && <ErrorText>{emailError} </ErrorText>}
          </InputContainer>

          <TextArea
            name="message"
            placeholder="Escreva sua mensagem aqui"
            onChange={(e: any) => setMessage(e.target.value)}
            value={message}
            required
          />
          <Button
            type="secondary"
            height={45}
            disabled={isLoading}
            onClick={(e: any) => submit(e)}
          >
            {isLoading ? (
              <Loading type="tail_spin" width={20} height={20} fill="#dbc68f" />
            ) : (
              "Enviar"
            )}
          </Button>
        </ContactForm>
      </FormContainer>
      <Dialog
        isVisible={isVisible}
        onDismiss={() => setIsVisible(false)}
        height={300}
        width={"60%"}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <br />
          <p>
            Agradecemos por entrar em contato. Em breve, um dos nossos
            representantes entrará em contato com você.
          </p>
        </div>
      </Dialog>
    </ContactContainer>
  );
};

export default ContactUs;
