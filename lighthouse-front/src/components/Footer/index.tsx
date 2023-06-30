"use-client";
import locationIcon from "../../assets/images/locationIcon.png";
import phoneIcon from "../../assets/images/phoneIcon.png";
import emailIcon from "../../assets/images/emailIcon.png";
import logoImage from "../../assets/images/logo2SizeBig.png";
import { messages } from "./messages";
import Image from "next/image";
import { FooterContainer } from "./styles";

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
    messages.contactUs,
  ];

  return (
    <FooterContainer>
      <div
        className="flex items-center "
        style={{
          gap: "35px",
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
          marginBottom: "1rem",
        }}
      >
        <div style={{ width: "30%" }}>
          <Image
            style={{
              minWidth: "250px",
            }}
            src={logoImage}
            alt="Logo"
            width={250}
            height={250}
            className="mb-4"
          />
        </div>

        <div
          style={{
            width: "auto",
            gap: "10vw",
            display: "flex",
          }}
        >
          <div className="flex flex-col mx-3">
            <div
              className="text-white text-lg font-bold uppercase mb-2"
              style={{
                fontFamily: "Marine",
                fontWeight: "bolder",
                width: 200,
              }}
            >
              {messages.contactUs}
            </div>
            {contactInfo.map((info, index) => (
              <div
                style={{ width: "200px" }}
                className="text-white mb-1 flex items-center"
                key={index}
              >
                <Image
                  src={info.icon}
                  alt={info.alt}
                  width={40}
                  height={40}
                  className="mr-2"
                />
                {info.text}
              </div>
            ))}
          </div>

          <div className="flex flex-col mx-3">
            <div
              className="text-white text-lg font-bold uppercase mb-2"
              style={{
                fontFamily: "Marine",
                fontSize: "16px",
                width: 200,
                fontWeight: "bolder",
              }}
            >
              {messages.home}
            </div>
            {menuItems.map((item, index) => (
              <div
                style={{ fontSize: "16px", height: "22px" }}
                className="text-white text-xs mb-1"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={{ width: "30%" }}></div>
      </div>

      <p
        style={{
          width: "auto",
          textAlign: "center",
          height: "17px",
          font: "normal normal normal 15px/17px Aboreto",
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: "#DBC68F",
        }}
      >
        Feito por vp digital
      </p>
    </FooterContainer>
  );
};

export default Footer;
