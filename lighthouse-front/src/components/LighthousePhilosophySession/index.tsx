import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  CardContainer0,
  CardContainer1,
  CardContainer1Description,
  CardContainer1Title,
  CardContainer1TitleLighthouse,
  CardContainer1TitleSub,
  CardContainer2,
  CardContainer2SubDescription,
  CardContainer2SubTitle,
  CardContainer2Title,
  CardContainer2TitleSub,
  CardContainer3,
  CardContainer3SubDescription,
  CardContainer3Title,
  CardContainer3TitleSub,
  DescriptionContainer0,
  LightHouseSpan,
  Wrapper,
} from "./styles";
import Button from "../Button";

export default function MyCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const next = () => {
    if (selectedIndex === 3) {
      setSelectedIndex(0);
    } else setSelectedIndex(selectedIndex + 1);
  };

  const prev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return (
    <Carousel
      showArrows={false}
      selectedItem={selectedIndex}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      swipeable={false}
      dynamicHeight={true}
    >
      <Wrapper containerIndex={0}>
        <CardContainer0>
          <DescriptionContainer0>
            Inspirado em um Farol, <LightHouseSpan>LIGHTHOUSE</LightHouseSpan>{" "}
            foi desenvolvida sobre uma sólida base de conhecimentos. Sobre esta,
            um sofisticado sistema de orientação, fundamentado em algorítmos,
            permite aos investidores alcançarem seus objetivos de rentabilidade
            com simplicidade segurança.
          </DescriptionContainer0>
          <Button
            onClick={next}
            type="secondary"
            height={66}
            width={"35%"}
            minWidth={300}
          >
            CONHEÇA NOSSA FILOSOFIA
          </Button>
        </CardContainer0>
      </Wrapper>
      <Wrapper containerIndex={1}>
        <CardContainer1>
          <CardContainer1Title>PROTEGENDO SEU PATRIMÔNIO</CardContainer1Title>
          <CardContainer1TitleSub>
            Proteção é o fundamento do método
          </CardContainer1TitleSub>
          <CardContainer1TitleLighthouse>
            LIGHTHOUSE
          </CardContainer1TitleLighthouse>
          <CardContainer1Description>
            A harmoniosa análise das regras tributárias e a combinação de
            jurisdição dos ativos formarão o alicerce do seu portfólio de
            investimentos, protegendo seu patrimônio de fatores econômicos e
            políticos da economia brasileira e de tributações excessivas.
          </CardContainer1Description>
          <Button
            onClick={next}
            type="secondary"
            height={66}
            width={"35%"}
            minWidth={300}
          >
            Next
          </Button>
        </CardContainer1>
      </Wrapper>
      <Wrapper containerIndex={2}>
        <CardContainer2>
          <CardContainer2Title>ESCLARECENDO SUAS DECISÕES</CardContainer2Title>
          <CardContainer2TitleSub>
            Uma metodologia comprovada nas escolhas de ativos
            <br />
            EM DIVERSOS CENÁRIOS ECONÔMICOS
          </CardContainer2TitleSub>
          <CardContainer2SubTitle>
            ANÁLISE MACROECONÔMICA
          </CardContainer2SubTitle>
          <CardContainer2SubDescription>
            Projeção de cenários macro econômicos , onde fatores como inflação e
            crescimento são ponderados para antecipar as potenciais direções de
            mercado
          </CardContainer2SubDescription>
          <CardContainer2SubTitle>ANÁLISE QUANTITATIVA</CardContainer2SubTitle>
          <CardContainer2SubDescription>
            Escolhas de ativos que historicamente tem performance superior nos
            cenários projetados
          </CardContainer2SubDescription>
          <div>
            <button onClick={prev}>prev</button>
            <button onClick={next}>next</button>
          </div>
        </CardContainer2>
      </Wrapper>
      <Wrapper containerIndex={3}>
        <CardContainer3>
          <CardContainer3Title>
            DIRECIONANDO SEUS INVESTIMENTOS
          </CardContainer3Title>
          <CardContainer3TitleSub>
            Saber quando e a que preço investir é essencial para a
            rentabilidade.
          </CardContainer3TitleSub>
          <CardContainer3SubDescription>
            A Sinergia de 3 algoritmos entregará ao investidor as informações
            fundamentais para o sucesso do investimento:
          </CardContainer3SubDescription>
          <div>
            <CardContainer3SubDescription>
              O primeiro identifica alterações estruturais de mercado
              sinalizando as transições da tendencia dos preços
            </CardContainer3SubDescription>
            <CardContainer3SubDescription>
              O segundo capta os ciclos de volatilidade associadas a cada etapa
              estrutural do Mercado, projetando valores futuros
            </CardContainer3SubDescription>
            <CardContainer3SubDescription>
              O terceiro seleciona a melhor estratégia de compra e venda de
              ativos associadas aos ciclos de volatilidade e suas fases
            </CardContainer3SubDescription>
            <Button
              onClick={next}
              type="secondary"
              height={66}
              width={"35%"}
              minWidth={300}
            >
              AGENDAR CONSULTORIA
            </Button>
          </div>
        </CardContainer3>
      </Wrapper>
    </Carousel>
  );
}
