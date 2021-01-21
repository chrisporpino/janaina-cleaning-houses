import React from "react";
import "./assets/styles/global.css";
import Footer from "./containers/Footer";
import HeaderSection from "./containers/Header";
import HomeSection from "./containers/HomeSection";
import AboutUsSection from "./containers/AboutUsSection";
import ServicesSection from "./containers/ServicesSection";
import TestimonialsSection from "./containers/TestimonialsSection";
import PortfolioSection from "./containers/PortfolioSection";

function App() {
  return (
    <>
      <HeaderSection />
      <HomeSection />
      <AboutUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <PortfolioSection />
      <Footer />
    </>
  );
}

export default App;
