import React from "react";
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
} from "./styles";
import locationIcon from "../../assets/images/locationIcon.png";
import phoneIcon from "../../assets/images/phoneIcon.png";
import emailIcon from "../../assets/images/emailIcon.png";
import Image from "next/image";
import Button from "../Button";

const messages = {
  address: "123 MOCKUP ST, COTIA-SP",
  phone: "(+55) 11 975678899",
  email: "lighthouse@lighthouse.com",
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

const ContactUs = () => (
  <ContactContainer id="fale-conosco">
    <CardText>
      <MainSessionTitle>Fale Conosco</MainSessionTitle>
      <LeftDivider />
      <CardItem>
        {contactInfo.map((info, index) => (
          <FooterItem key={index}>
            <Image src={info.icon} alt={info.alt} />
            {info.text}
          </FooterItem>
        ))}
      </CardItem>
    </CardText>

    <FormContainer>
      <ContactForm>
        <InputRow>
          <Input type="text" name="name" placeholder="Nome" />
          <Input type="tel" name="phone" placeholder="Telefone" />
        </InputRow>
        <Input
          className="email"
          type="email"
          name="email"
          placeholder="Email"
        />
        <TextArea name="message" placeholder="Escreva sua mensagem aqui" />
        <Button type="secondary" height={45}>
          Enviar
        </Button>
      </ContactForm>
    </FormContainer>
  </ContactContainer>
);

export default ContactUs;
