import React from "react";

import { fetchAPI } from "../lib/api";
import Header from "../components/header";
import { Container } from "./styles";
import HeroSection from "../components/heroSection/index";
import TrustSection from "../components/trustSection/index";

const Home = () => {
  return (
    <Container>
      <Header />

      <HeroSection />
      <TrustSection />
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
