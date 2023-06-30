import React from "react";
import { Title, Text, Wrapper, CardText, CardImage, TitleSpan } from "./styles";
import Button from "../Button/index";

const Wealth = () => (
  <Wrapper>
    <CardText>
      <Title>
        <TitleSpan>VOCÊ NO COMANDO</TitleSpan>

        <TitleSpan>DE SUAS RIQUEZAS</TitleSpan>
      </Title>
      <Text>
        Como investidor profissional por mais de 30 anos, desenvolvi um serviço
        de investimentos no Mercado Financeiro Internacional que atende às
        necessidades específicas de brasileiros interessados em diversificar seu
        patrimônio, de forma simples, segura e rentável.
      </Text>
      <Text>
        LIGHTHOUSE é um conjunto de conhecimentos que se associam de forma a
        orientar você desde o início a se estruturar e participar ativamente do
        mercado financeiro mundial mais importante, onde as grandes
        oportunidades estão presentes.
      </Text>
      <Button type="secondary">Conheça Mais</Button>
    </CardText>

    <CardImage />
  </Wrapper>
);

export default Wealth;
