import React from "react";
import { Container } from "./AppStyle";
import { AboutService } from "./components/AboutService";
import { AboutUs } from "./components/AboutUs";
import { Footer } from "./components/Footer";
import { Gifts } from "./components/Gifts";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export const App = () => {
  return (
    <div className="center">
      <Container>
        <Header />
        <Main />
        <AboutUs />
        <AboutService />
        <Gifts />
        <Footer />
      </Container>
    </div>
  );
};
