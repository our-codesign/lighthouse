import React from "react";
import {
  FooterContainer,
  FooterColumn,
  FooterItem,
  FooterBorder,
  FooterColumnWrapper,
  Container,
  CardImage,
  FooterLink,
  FooterTitle,
} from "./styles";
import locationIcon from "../../assets/images/locationIcon.png";
import phoneIcon from "../../assets/images/phoneIcon.png";
import emailIcon from "../../assets/images/emailIcon.png";
import { messages } from "./messages";
import LOGO from "../../assets/images/LOGO-LIGHTHOUSEBRANCO.png";
import { Link } from "react-scroll";

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
    { text: messages.home, id: "home" },
    { text: messages.whoWeAre, id: "quemSomos" },
    { text: messages.solutions, id: "solucoes" },
    { text: messages.methodology, id: "metodologia" },
    { text: messages.blog, id: "blog" },
    { text: messages.contact, id: "fale-conosco" },
  ];

  return (
    <FooterContainer>
      <FooterBorder />

      <Container>
        <CardImage>
          <img src={LOGO} alt="logo branca" width={200} />
        </CardImage>

        <FooterColumnWrapper>
          <FooterColumn>
            <FooterTitle>FALE CONOSCO</FooterTitle>
            {contactInfo.map((info, index) => (
              <FooterItem key={index}>
                <img src={info.icon} alt={info.alt} width={24} height={24} />
                {info.text}
              </FooterItem>
            ))}
          </FooterColumn>
          <FooterColumn>
            <FooterTitle>{messages.menu}</FooterTitle>
            {menuItems.map((item, index) => (
              <Link
                activeClass="active"
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={index}
              >
                <FooterLink>{item.text}</FooterLink>
              </Link>
            ))}
          </FooterColumn>
          <FooterColumn style={{ paddingTop: 15 }}>
            <FooterLink
              href="https://www.iubenda.com/privacy-policy/58498631"
              target="_blank"
            >
              Politica de Privacidade
            </FooterLink>
            <FooterLink
              href="https://www.iubenda.com/privacy-policy/58498631/cookie-policy"
              target="_blank"
            >
              Politica de Cookies
            </FooterLink>
          </FooterColumn>
        </FooterColumnWrapper>
        <div style={{ flex: 0.8 }}></div>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
