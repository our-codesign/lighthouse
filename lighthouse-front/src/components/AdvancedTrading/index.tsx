import React from "react";
import Button from "../Button/index";
import {
  Wrapper,
  CardImage,
  CardText,
  MainSessionTitle,
  LeftDivider,
  MainSessionDescription,
  DescriptionSpan,
} from "./styles";

const AdvancedTrading = () => (
  <Wrapper>
    <CardImage />

    <CardText>
      <MainSessionTitle>
        <DescriptionSpan>ADVANCED TRADING</DescriptionSpan>
        <DescriptionSpan>OPTION STRATEGY</DescriptionSpan>
      </MainSessionTitle>
      <LeftDivider />
      <MainSessionDescription>
        <DescriptionSpan>UM MÉTODO PARA GERAR RENDA ADICIONAL</DescriptionSpan>
        <DescriptionSpan>PARA INVESTIDORES MAIS SOFISTICADOS</DescriptionSpan>
      </MainSessionDescription>
      <Button type="secondary" height={66} width={"35%"} minWidth={300}>
        ACESSSE NOSSO BLOG
      </Button>
    </CardText>
  </Wrapper>
);

export default AdvancedTrading;
