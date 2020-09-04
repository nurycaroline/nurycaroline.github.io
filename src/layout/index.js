import React from "react";
import Home from "../containers/Home";
import Works from "../containers/Works";
import About from "../containers/About";
import ForFun from "../containers/ForFun";

import { Container } from "./styles";

export default function Site() {
  return (
    <Container>
      <Home />
      <Works/>
      {/* <ForFun/> */}
      <About />
    </Container>
  );
}
