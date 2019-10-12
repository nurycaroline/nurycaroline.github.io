import React from "react";
import Home from "../containers/Home";
import Works from "../containers/Works";

import { Container } from "./styles";

export default function Site({ works }) {
  return (
    <Container>
      <Home />
      <Works items={works} />
    </Container>
  );
}
