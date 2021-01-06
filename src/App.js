import React from "react";
import "./assets/styles/global.css";
import styled from "styled-components";
import "./App.css";
import Footer from "./containers/Footer";
import HeaderSection from "./containers/Header";
import HomeSection from "./containers/HomeSection";
import AboutUsSection from "./containers/AboutUsSection";
import ServicesSection from "./containers/ServicesSection";
import TestimonialsSection from "./containers/TestimonialsSection";
import PortfolioSection from "./containers/PortfolioSection";

function App() {
  return (
    <div>
      <HeaderSection />
      <HomeSection />
      <AboutUsSection />
      <ServicesSection />
      <TestimonialsSection /> 
      <PortfolioSection />
      <Footer />
    </div>
  );
}

export default App;
