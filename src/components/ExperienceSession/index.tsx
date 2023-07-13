import {
  ExperienceContainer,
  Filter,
  ExperienceTitle,
  ExperienceDescription,
  GlowingCardsContainer,
  GlowingCard,
  Divider,
  ExperienceDescriptionCard,
  CardTitle,
  CardDescription,
  TextDivider,
} from "./styles";
import Button from "../Button/index";
import { Link } from "react-scroll";

export default function ExperienceSession() {
  return (
    <ExperienceContainer id="solucoes">
      <Filter />
      <div style={{ paddingTop: 200, zIndex: 999 }}>
        <ExperienceTitle>EXPERIÊNCIA E MÉTODO</ExperienceTitle>

        <ExperienceDescription>
          PARA NAVEGAR EM DIFERENTES CENARIOS!
        </ExperienceDescription>
      </div>
      <Divider />
      <GlowingCardsContainer>
        <GlowingCard>
          <CardTitle>CONSULTORIA OPERACIONAL</CardTitle>
          <ExperienceDescriptionCard>
            <CardDescription>Corretora</CardDescription>
            <TextDivider />
          </ExperienceDescriptionCard>
          <ExperienceDescriptionCard>
            <CardDescription>
              Software de <br />
              gestão de
              <br /> investimentos
            </CardDescription>
            <TextDivider />
          </ExperienceDescriptionCard>
        </GlowingCard>

        <GlowingCard>
          <CardTitle>CONSULTORIA JURÍDICA</CardTitle>
          <ExperienceDescriptionCard>
            <CardDescription>
              Aspectos legais sobre <br /> ativos de investidores
              <br /> brasileiros em
              <br />
              jurisdição internacional
            </CardDescription>
            <TextDivider />
          </ExperienceDescriptionCard>
        </GlowingCard>

        <GlowingCard>
          <CardTitle>CONSULTORIA TRIBUTÁRIA</CardTitle>
          <ExperienceDescriptionCard>
            <CardDescription>
              Jurisdições favoráveis
              <br /> a tributação de investimento
              <br /> de brasileiros
            </CardDescription>
            <TextDivider />
          </ExperienceDescriptionCard>
          <ExperienceDescriptionCard>
            <CardDescription>
              Pagando menos
              <br /> impostos
            </CardDescription>
            <TextDivider />
          </ExperienceDescriptionCard>
        </GlowingCard>
        <GlowingCard>
          <CardTitle>CONSULTORIA FINANCEIRA</CardTitle>
          <ExperienceDescriptionCard>
            <CardDescription>
              Construindo um <br />
              portfólio de ativos
              <br /> diversificados
            </CardDescription>
            <TextDivider />
          </ExperienceDescriptionCard>
          <ExperienceDescriptionCard>
            <CardDescription>
              Gestão ativa de
              <br />
              portfólios financeiros
            </CardDescription>
            <TextDivider />
          </ExperienceDescriptionCard>
        </GlowingCard>
        <GlowingCard>
          <CardTitle>TRADING STRATEGIES</CardTitle>
          <ExperienceDescriptionCard>
            <CardDescription>
              Usando estratégias de <br />
              opções de forma segura <br />e inovadora para <br /> geração de
              renda
            </CardDescription>
            <TextDivider />
          </ExperienceDescriptionCard>
        </GlowingCard>
      </GlowingCardsContainer>
      <div
        style={{
          marginBottom: 30,
          zIndex: 999,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link
          activeClass="active"
          to="metodologia"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <Button type="secondary" height={66} width={"35%"} minWidth={300}>
            CONHEÇA NOSSO MÉTODO
          </Button>
        </Link>
      </div>
    </ExperienceContainer>
  );
}