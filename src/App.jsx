import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Features from "./components/Features";
import Interest from "./components/Interest";
import FloorPlans from "./components/FloorPlans";
import InvestmentSection from "./components/Investment";
import InvestmentPackage from "./components/InvestmentPackage";
import NewsletterSection from "./components/NewsletterSection";
export default function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero / Banner Section */}
      <Hero />

      {/* Highlights */}
      <Highlights />
      {/* Features Section */}
      <Features />
      {/* Interest Section */}
      <Interest />
      {/* Floor Plans Section */}
      <FloorPlans />
      {/* Investment Section */}
      <InvestmentSection />
      {/* Investment Package Section */}
      <InvestmentPackage />
      {/* Newsletter Section */}
      <NewsletterSection />
      {/* Next sections like Features, Testimonials, Footer will go here */}
    </>
  );
}
