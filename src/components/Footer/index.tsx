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
import phoneIcon from "../../assets/images/phoneIcon.webp";
import emailIcon from "../../assets/images/emailIcon.webp";
import { messages } from "./messages";
import LOGO from "../../assets/images/LOGO-LIGHTHOUSEBRANCO.webp";
import { Link } from "react-scroll";
import ANCHORS from "../../constants/anchors";

const Footer = () => {
  const contactInfo = [
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
    { text: messages.home, id: ANCHORS.home },
    { text: messages.whoWeAre, id: ANCHORS.wealth },
    { text: messages.solutions, id: ANCHORS.experience },
    { text: messages.methodology, id: ANCHORS.philosophy },
    { text: messages.blog, id: "blog" },
    { text: messages.contact, id: ANCHORS.contact },
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
