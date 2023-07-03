import {
  MainSessionContainer,
  Filter,
  MainSessionTitle,
  MainSessionDescription,
  DividerContainer,
  LeftDivider,
  RightDivider,
  GetToKnow,
  Divider,
} from "./styles";
import Button from "../Button";
import { useState, useEffect } from "react";
import Dialog from "../Dialog";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("MATEUS-123-321");
const msg = {
  to: "test@example.com", // Change to your recipient
  from: "test@example.com", // Change to your verified sender
  subject: "Sending with SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
export type Screensize = {
  dynamicWidth: number;
  dynamicHeight: number;
};

export default function MainSession() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDialog = () => {
    console.log("entrou");
    sgMail
      .send(msg)
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [screenSize, getDimension] = useState<Screensize>();
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    if (!screenSize) setDimension();
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const cta =
    screenSize && screenSize?.dynamicWidth >= 884
      ? "Temos um convite para você. Clique aqui!"
      : "Temos um convite para você.";
  return (
    <MainSessionContainer>
      <Filter />
      <MainSessionTitle>SIMPLIFICANDO INVESTIMENTOS</MainSessionTitle>
      <DividerContainer>
        <LeftDivider />
        <MainSessionTitle>&</MainSessionTitle>
        <RightDivider />
      </DividerContainer>
      <MainSessionDescription>
        ORIENTANDO VOCÊ A INVESTIR NO MERCADO FINANCEIRO INTERNACIONAL
      </MainSessionDescription>
      <div style={{ marginTop: 60, zIndex: 999 }}>
        <Button
          type="tertiary"
          height={66}
          width={"100%"}
          onClick={handleDialog}
        >
          {cta}
        </Button>
      </div>
      <GetToKnow>CONHEÇA LIGHTHOUSE</GetToKnow>
      <Divider />
      <Dialog isVisible={isOpen} onDismiss={handleDialog}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/tgbNymZ7vqY"
        ></iframe>
      </Dialog>
    </MainSessionContainer>
  );
}
