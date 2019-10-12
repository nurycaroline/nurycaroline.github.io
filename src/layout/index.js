import React from "react";
import Home from "../containers/Home";
import Works from "../containers/Works";
import About from "../containers/About";

import { Container } from "./styles";
// import './fonts.css';

export default function Site() {
  return (
    <Container>
      <Home />
      <Works/>
      <About />
    </Container>
  );
}
