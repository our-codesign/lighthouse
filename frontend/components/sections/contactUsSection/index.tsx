import React from "react";
import {
  ContactCard,
  ContactInfo,
  ContactUsContainer,
  FormContainer,
  Input,
  MessageInput,
  SubContainer,
  ContactRow,
  InputWrapper,
} from "./styles";
import locationIcon from "../../../assets/images/locationIcon.png";
import phoneIcon from "../../../assets/images/phoneIcon.png";
import emailIcon from "../../../assets/images/emailIcon.png";
import barra from "../../../assets/images/barra.png";
import messages from "./messages";
import Image from "next/image";
import Button from "../../button";

const ContactUsSection: React.FC = () => {
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

  return (
    <ContactUsContainer>
      <SubContainer>
        <ContactCard>
          <p className="title">{messages.title}</p>
          <Image src={barra} alt="Divisor" width={400} height={24} />

          {contactInfo.map((info, index) => (
            <ContactRow key={index}>
              <Image src={info.icon} alt={info.alt} width={24} height={24} />
              <ContactInfo>{info.text}</ContactInfo>
            </ContactRow>
          ))}
        </ContactCard>

        <FormContainer>
          <InputWrapper>
            <Input type="text" placeholder={messages.namePlaceholder} />
            <Input type="text" placeholder={messages.phonePlaceholder} />
          </InputWrapper>

          <Input type="email" placeholder={messages.emailPlaceholder} />
          <MessageInput placeholder={messages.messagePlaceholder} />

          <Button
            height="60px"
            buttonType="secondary"
            label={messages.submitText}
          />
        </FormContainer>
      </SubContainer>
    </ContactUsContainer>
  );
};

export default ContactUsSection;
