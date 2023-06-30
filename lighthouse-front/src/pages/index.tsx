import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainSession from "@/components/MainSession";
import Wealth from "@/components/Wealth";

export default function Home() {
  return (
    <div
      style={{
        height: "auto",
        minHeight: "300vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Header />
      <MainSession />
      <Wealth />
      <Footer />
    </div>
  );
}
