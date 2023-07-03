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
} from "./styles";
import Button from "../Button/index";

export default function ExperienceSession() {
  return (
    <ExperienceContainer id="experienceSession">
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
          </ExperienceDescriptionCard>
          <ExperienceDescriptionCard>
            <CardDescription>
              Software de <br />
              gestão de
              <br /> investimentos
            </CardDescription>
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
          </ExperienceDescriptionCard>
          <ExperienceDescriptionCard>
            <CardDescription>
              Pagando menos
              <br /> impostos
            </CardDescription>
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
          </ExperienceDescriptionCard>
          <ExperienceDescriptionCard>
            <CardDescription>
              Gestão ativa de
              <br />
              portfólios financeiros
            </CardDescription>
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
        <Button type="secondary" height={66} width={"35%"} minWidth={300}>
          CONHEÇA NOSSO MÉTODO
        </Button>
      </div>
    </ExperienceContainer>
  );
}
