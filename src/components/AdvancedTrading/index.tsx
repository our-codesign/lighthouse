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
  Filter,
} from "./styles";

const AdvancedTrading = () => (
  <Wrapper id="blog">
    <CardImage />
    <Filter />
    <CardText>
      <MainSessionTitle>
        <DescriptionSpan>ADVANCED TRADING</DescriptionSpan>
        <DescriptionSpan>OPTION STRATEGY</DescriptionSpan>
      </MainSessionTitle>
      <LeftDivider />
      <MainSessionDescription>
        UM MÉTODO PARA GERAR RENDA ADICIONAL <br />
        PARA INVESTIDORES MAIS SOFISTICADOS
      </MainSessionDescription>
      <a
        style={{ textDecoration: "none" }}
        target="_blank"
        href="https://lighthouseinvestimentos.com/blog"
        rel="noreferrer"
      >
        <Button type="secondary" height={50} width={"35%"} minWidth={300}>
          ACESSSE NOSSO BLOG
        </Button>
      </a>
    </CardText>
  </Wrapper>
);

export default AdvancedTrading;
