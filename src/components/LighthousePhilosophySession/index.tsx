import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import {
  Arrow1Wrapper,
  Arrow2Wrapper,
  ButtonWrapper,
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
  CardContainer3SubDescriptionWrapper,
  CardContainer3Title,
  CardContainer3TitleSub,
  DescriptionContainer0,
  Divider,
  Filter1,
  Filter2,
  Filter3,
  Filter4,
  LightHouseSpan,
  Wrapper,
} from "./styles";
import Button from "../Button";
import RightArrowSVG from "../../assets/svgs/rightArrowSVG";
import LeftArrowSVG from "../../assets/svgs/leftArrowSVG";
import { Link } from "react-scroll";
import useScreenSize from "../../hooks/use-screen-size";

export default function MyCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { screenSize } = useScreenSize();

  const next = () => {
    console.log(selectedIndex, "INDEX");
    if (selectedIndex === 3) {
      setSelectedIndex(0);
    } else setSelectedIndex(selectedIndex + 1);
  };

  const prev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };
  const cta1 =
    screenSize && screenSize?.dynamicWidth >= 884
      ? "CONHEÇA NOSSA FILOSOFIA"
      : "NOSSA FILOSOFIA";
  const cta2 =
    screenSize && screenSize?.dynamicWidth >= 884
      ? "AGENDAR CONSULTORIA"
      : "CONSULTORIA";
  const arrowHeight =
    screenSize && screenSize?.dynamicWidth >= 884 ? "180" : "50";
  return (
    <Carousel
      showArrows={false}
      selectedItem={selectedIndex}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      swipeable={false}
      dynamicHeight={true}
      animationHandler={"fade"}
    >
      <Wrapper containerIndex={0} id="metodologia">
        <Filter1 />
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
            minWidth={200}
            mobileHeigh={50}
          >
            {cta1}
          </Button>
        </CardContainer0>
      </Wrapper>
      <Wrapper containerIndex={1}>
        <Filter2 />
        <CardContainer1>
          <CardContainer1Title>PROTEGENDO SEU PATRIMÔNIO</CardContainer1Title>
          <CardContainer1TitleSub>
            Proteção é o fundamento do método
          </CardContainer1TitleSub>
          <CardContainer1TitleLighthouse>
            LIGHTHOUSE
          </CardContainer1TitleLighthouse>
          <Divider />
          <CardContainer1Description>
            A harmoniosa análise das regras tributárias e a combinação de
            jurisdição dos ativos formarão o alicerce do seu portfólio de
            investimentos, protegendo seu patrimônio de fatores econômicos e
            políticos da economia brasileira e de tributações excessivas.
          </CardContainer1Description>
          <Arrow1Wrapper>
            <LeftArrowSVG onClick={prev} height={arrowHeight} />
            <RightArrowSVG onClick={next} height={arrowHeight} />
          </Arrow1Wrapper>
        </CardContainer1>
      </Wrapper>
      <Wrapper containerIndex={2}>
        <Filter3 />
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
          <Arrow2Wrapper>
            <LeftArrowSVG onClick={prev} height={arrowHeight} />
            <RightArrowSVG onClick={next} height={arrowHeight} />
          </Arrow2Wrapper>
        </CardContainer2>
      </Wrapper>
      <Wrapper containerIndex={3}>
        <Filter4 />
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
          <CardContainer3SubDescriptionWrapper>
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
            <div style={{ paddingTop: 30 }}>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=5511999907799"
                rel="noreferrer"
              >
                <Button
                  onClick={next}
                  type="secondary"
                  height={66}
                  width={"35%"}
                  minWidth={200}
                  mobileHeigh={50}
                >
                  <ButtonWrapper>{cta2}</ButtonWrapper>
                </Button>
              </a>
            </div>
          </CardContainer3SubDescriptionWrapper>
        </CardContainer3>
      </Wrapper>
    </Carousel>
  );
}
