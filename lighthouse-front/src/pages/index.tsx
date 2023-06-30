import AdvancedTrading from "@/components/AdvancedTrading";
import ExperienceSession from "@/components/ExperienceSession";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainSession from "@/components/MainSession";
import Wealth from "@/components/Wealth";

export default function Home() {
  return (
    <div
      style={{
        height: "auto",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Header />
      <MainSession />
      <Wealth />
      <ExperienceSession />
      <AdvancedTrading />
      <Footer />
    </div>
  );
}
