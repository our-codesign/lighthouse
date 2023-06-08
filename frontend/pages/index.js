import React from "react";

import { fetchAPI } from "../lib/api";
import Header from "../components/header";
import { Container } from "./styles";
import HeroSection from "../components/sections/heroSection/index";
import TrustSection from "../components//sections/trustSection/index";
import WhyInvestSection from "../components//sections/whyInvestSection/index";
import CapacitationSection from "../components//sections/capacitationSection.tsx/index";
import InviteSection from "../components/sections/inviteSection.tsx/index";
import ExperienceSection from "../components/sections/experienceSection/index";
import ControlSection from "../components/sections/controlSection/index";
import OptimizedStrategies from "../components/sections/optimizedStrategie/index";

const Home = () => {
  return (
    <Container>
      <Header />
      <HeroSection />
      <TrustSection />
      <WhyInvestSection />
      <CapacitationSection />
      <InviteSection />
      <ExperienceSection />
      <ControlSection />
      <OptimizedStrategies />
    </Container>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [articlesRes, categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/articles", { populate: ["image", "category"] }),
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
      },
    }),
  ]);

  return {
    props: {
      articles: articlesRes.data,
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  };
}

export default Home;
