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

export default function ExperienceSession() {
  return (
    <ExperienceContainer>
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
          <CardDescription>
            Aspectos legais sobre <br /> ativos de investidores
            <br /> brasileiros em
            <br />
            jurisdição internacional
          </CardDescription>
        </GlowingCard>

        <GlowingCard>
          <CardTitle>CONSULTORIA TRIBUTÁRIA</CardTitle>
        </GlowingCard>
        <GlowingCard>
          <CardTitle>CONSULTORIA FINANCEIRA</CardTitle>
        </GlowingCard>
        <GlowingCard>
          <CardTitle>TRADING STRATEGIES</CardTitle>
        </GlowingCard>
      </GlowingCardsContainer>
    </ExperienceContainer>
  );
}
