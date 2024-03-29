import {
  MainSessionContainer,
  Filter,
  MainSessionTitle,
  MainSessionDescription,
  DividerContainer,
  LeftDivider,
  RightDivider,
  GetToKnow,
  Divider,
  TriangleDown,
  GetToKownContainer,
  MyWhatsApp,
  WhatsApp,
} from "./styles";
import Button from "../Button";
import Dialog from "../Dialog";
import useDialog from "../../hooks/use-dialog";
import useScreenSize from "../../hooks/use-screen-size";
import { Link } from "react-scroll";
import WhatsappIconSVG from "../../assets/svgs/whatsappIconSVG";
import ANCHORS from "../../constants/anchors";

export type Screensize = {
  dynamicWidth: number;
  dynamicHeight: number;
};

export default function MainSession() {
  const { isVisible, handleClose, handleOpen } = useDialog();
  const { screenSize } = useScreenSize();

  const cta =
    screenSize && screenSize?.dynamicWidth >= 884
      ? "Temos um convite para você. Clique aqui!"
      : "Temos um convite para você.";
  return (
    <MainSessionContainer id={ANCHORS.home} className="home">
      <Filter />
      <MainSessionTitle>SIMPLIFICANDO INVESTIMENTOS</MainSessionTitle>
      <DividerContainer>
        <LeftDivider />
        <MainSessionTitle>&</MainSessionTitle>
        <RightDivider />
      </DividerContainer>
      <MainSessionDescription>
        ORIENTANDO VOCÊ A INVESTIR NO MERCADO FINANCEIRO INTERNACIONAL
      </MainSessionDescription>
      <div style={{ marginTop: 60, zIndex: 9999999 }}>
        <Button type="tertiary" height={66} width={"100%"} onClick={handleOpen}>
          {cta}
        </Button>
      </div>
      <GetToKownContainer>
        <Link
          activeClass="active"
          to={ANCHORS.wealth}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <GetToKnow>CONHEÇA LIGHTHOUSE</GetToKnow>
          <Divider />
          <TriangleDown />
        </Link>
      </GetToKownContainer>

      <Dialog isVisible={isVisible} onDismiss={handleClose}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/X2VmTVagwWg"
          title="youtube"
        ></iframe>
      </Dialog>
      <WhatsApp
        className="whatsApp"
        target="_blank"
        href="https://api.whatsapp.com/send?phone=5511999907799"
      >
        <MyWhatsApp className="fa fa-whatsapp my-whatsApp">
          <WhatsappIconSVG />
        </MyWhatsApp>
      </WhatsApp>
    </MainSessionContainer>
  );
}
