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
  const {
    mainContainerRef,
    wealthContainerRef,
    experienceContainerRef,
    philosophyContainerRef,
    contactContainerRef,
  } = useAnchors();

  return (
    <div
      style={{
        height: "auto",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Header />
      <div ref={mainContainerRef}>
        <MainSession />
      </div>
      <div ref={wealthContainerRef}>
        <Wealth />
      </div>
      <div ref={experienceContainerRef}>
        <ExperienceSession />
      </div>
      <div ref={philosophyContainerRef}>
        <LighthousePhilosophySession />
      </div>

      <AdvancedTrading />
      <div ref={contactContainerRef}>
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;
