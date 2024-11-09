import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PictureCarrossel from "./components/PictureCarrossel";
import ContactInfo from "./components/ContactInfo";
import AboutMe from "./components/AboutMe";
import Reviews from "./components/Reviews";
import Rates from "./components/Rates";

function App() {
  return (
    <div>
      <Header />
      <PictureCarrossel />
      <AboutMe />
      <Reviews />
      <Rates />
      <ContactInfo />
    </div>
  );
}

export default App;
