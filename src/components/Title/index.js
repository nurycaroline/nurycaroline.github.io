import React from "react";

import { Container } from "./styles";

export default function Title({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}
