import "./App.css";
import "./index.css";
import Header from "./components/Header";
import LighthousePhilosophySession from "./components/LighthousePhilosophySession";
import MainSession from "./components/MainSession";
import Wealth from "./components/Wealth";
import ExperienceSession from "./components/ExperienceSession";
import AdvancedTrading from "./components/AdvancedTrading";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import useAnchors from "./hooks/use-anchors";

function App() {
  useAnchors();

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
      <LighthousePhilosophySession />

      <AdvancedTrading />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
