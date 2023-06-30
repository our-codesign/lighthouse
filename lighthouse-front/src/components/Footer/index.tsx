import React from "react";
import {
  FooterContainer,
  FooterColumn,
  FooterItem,
  FooterBorder,
  FooterColumnWrapper,
  Container,
  CardImage,
} from "./styles";
import locationIcon from "../../assets/images/locationIcon.png";
import phoneIcon from "../../assets/images/phoneIcon.png";
import emailIcon from "../../assets/images/emailIcon.png";
import Image from "next/image";
import { messages } from "./messages";
import LOGO from "../../assets/images/LOGO-LIGHTHOUSEBRANCO.png";

const Footer = () => {
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

  const menuItems = [
    messages.home,
    messages.whoWeAre,
    messages.solutions,
    messages.methodology,
    messages.blog,
    messages.contact,
  ];

  return (
    <FooterContainer>
      <FooterBorder />

      <Container>
        <CardImage>
          <Image src={LOGO} alt="logo branca" width={200} />
        </CardImage>

        <FooterColumnWrapper>
          <FooterColumn>
            <FooterItem className="title">{messages.contactUs}</FooterItem>
            {contactInfo.map((info, index) => (
              <FooterItem key={index}>
                <Image src={info.icon} alt={info.alt} width={24} height={24} />
                {info.text}
              </FooterItem>
            ))}
          </FooterColumn>
          <FooterColumn>
            <FooterItem className="title">{messages.menu}</FooterItem>
            {menuItems.map((item, index) => (
              <FooterItem key={index}>{item}</FooterItem>
            ))}
          </FooterColumn>
        </FooterColumnWrapper>
        <div style={{ flex: 0.8 }}></div>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
