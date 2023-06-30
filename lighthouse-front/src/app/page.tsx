import Button, { ButtonType } from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Header />
      <div
        style={{
          backgroundColor: "red",
          height: "50vh",
          display: "flex",
          width: "400px",
          alignItems: "center",
          marginTop: "10vh",
          justifyContent: "center",
          gap: "40px",
          flexDirection: "column",
        }}
      >
        <Button type={ButtonType.PRIMARY}>Botão Primário</Button>

        <Button
          type={ButtonType.SECONDARY}
          width="px-10"
          height="py-4"
          fontSize="font-medium"
        >
          Botão Secundário Personalizado
        </Button>

        <Button type={ButtonType.TERTIARY} width="px-20" height="py-2.5">
          Botão Secundário
        </Button>
      </div>
      <Footer />
    </div>
  );
}
