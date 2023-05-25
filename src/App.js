import React from "react";
import data from "../src/data/data.json";
import Container from "react-bootstrap/Container";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Features from "./components/Features";
import FeaturesGrid from "./components/FeaturesGrid";
import Reviews from "./components/Reviews";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Container fluid className="p-0 overflow-hidden">
      <Navigation />
      <Header />
      <Features items={data.featuresList} />
      <FeaturesGrid items={data.featuresGrid} />
      <Reviews items={data.reviewsList} />
      <Signup />
      <Footer items={data.footerList} icons={data.footerIcons} />
    </Container>
  );
}
