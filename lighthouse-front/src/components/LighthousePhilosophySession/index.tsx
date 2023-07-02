import React from "react";
import Button from "../Button/index";
import { Wrapper, Filter, CardContainer, DescriptionContainer } from "./styles";

const LighthousePhilosophySession = () => (
  <Wrapper>
    <Filter />

    <CardContainer>
      <DescriptionContainer>
        Inspirado em um Farol, LIGHTHOUSE foi desenvolvida sobre uma sólida base
        de conhecimentos. Sobre esta, um sofisticado sistema de orientação,
        fundamentado em algorítmos, permite aos investidores alcançarem seus
        objetivos de rentabilidade com simplicidade segurança.
      </DescriptionContainer>
      <Button type="secondary" height={66} width={"35%"} minWidth={540}>
        CONHEÇA NOSSA FILOSOFIA{" "}
      </Button>
    </CardContainer>
  </Wrapper>
);

export default LighthousePhilosophySession;
