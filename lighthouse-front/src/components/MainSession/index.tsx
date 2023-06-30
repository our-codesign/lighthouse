"use-client";

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

export default function MainSession() {
  const [screenSize, getDimension] = useState<Screensize>();
  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    if (!screenSize) setDimension();
    console.log("entrou aqui, ", screenSize?.dynamicWidth);
    window.addEventListener("resize", setDimension);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [screenSize]);

  const cta =
    screenSize?.dynamicWidth >= 884
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
        <Button type="tertiary" height={66} width={"100%"}>
          {cta}
        </Button>
      </div>
      <GetToKnow>CONHEÇA LIGHTHOUSE</GetToKnow>
      <Divider />
    </MainSessionContainer>
  );
}
