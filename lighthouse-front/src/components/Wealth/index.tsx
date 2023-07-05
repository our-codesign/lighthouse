import React from "react";
import { Title, Text, Wrapper, CardText, CardImage, Filter } from "./styles";
import Button from "../Button/index";
import { Link } from "react-scroll";

const Wealth = () => (
  <Wrapper id="quemSomos">
    <CardText>
      <Title>
        VOCÊ NO COMANDO <br /> DE SUAS RIQUEZAS
      </Title>
      <Text>
        Como investidor profissional por mais de 30 anos, desenvolvi um serviço
        de investimentos no Mercado Financeiro Internacional que atende às
        necessidades específicas de brasileiros interessados em diversificar seu
        patrimônio, de forma simples, segura e rentável.
      </Text>
      <Text style={{ marginBottom: 60 }}>
        LIGHTHOUSE é um conjunto de conhecimentos que se associam de forma a
        orientar você desde o início a se estruturar e participar ativamente do
        mercado financeiro mundial mais importante, onde as grandes
        oportunidades estão presentes.
      </Text>
      <Link
        activeClass="active"
        to="fale-conosco"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <Button type="secondary" height={66} width={"35%"} minWidth={200}>
          CONHEÇA MAIS
        </Button>
      </Link>
    </CardText>
    <Filter />
    <CardImage />
  </Wrapper>
);

export default Wealth;
