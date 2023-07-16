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
  TitleContainer,
} from "./styles";
import Button from "../Button/index";
import { Link } from "react-scroll";
import useDialog from "../../hooks/use-dialog";
import Dialog from "../Dialog";
import useScreenSize from "../../hooks/use-screen-size";

export default function ExperienceSession() {
  const { isVisible, handleClose, handleOpen, selected } = useDialog<string>();
  const { screenSize } = useScreenSize();

  const open = (string: string) => {
    if (screenSize && screenSize?.dynamicWidth >= 884) return;

    handleOpen(string);
  };
  return (
    <ExperienceContainer id="solucoes">
      <Filter />
      <TitleContainer>
        <ExperienceTitle>EXPERIÊNCIA E MÉTODO</ExperienceTitle>

        <ExperienceDescription>
          PARA NAVEGAR EM DIFERENTES CENARIOS!
        </ExperienceDescription>
      </TitleContainer>
      <Divider style={{ width: "80%" }} />
      <GlowingCardsContainer>
        <GlowingCard
          onClick={() => open("Software de gestão de investimentos")}
        >
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

        <GlowingCard
          onClick={() =>
            open(
              "Aspectos legais sobre ativos de investidores brasileiros em jurisdição internacional"
            )
          }
        >
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

        <GlowingCard
          onClick={() =>
            open(
              "Jurisdições favoráveis a tributação de investimento de brasileiros"
            )
          }
        >
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
        <GlowingCard
          onClick={() =>
            open("Construindo um portfólio de ativos diversificados")
          }
        >
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
        <GlowingCard
          onClick={() =>
            open(
              "Usando estratégias de opções de forma segura e inovadora para geração de renda"
            )
          }
        >
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
      <Dialog
        isVisible={isVisible}
        onDismiss={handleClose}
        height={300}
        width={"90%"}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <br />
          <p>{selected}</p>
        </div>
      </Dialog>
    </ExperienceContainer>
  );
}
