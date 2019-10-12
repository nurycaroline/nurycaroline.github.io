import React from "react";

import {
  Container,
  Header,
  Logo,
  Body,
  Photo,
  Presentation,
  Links
} from "./styles";

export default function Home() {
  return (
    <Container>
      <Header>
        <img src="/static/polygon-top.png" alt="Poligno de decoracao" />
        <Logo>
          <span>nury</span>
          <span>caroline</span>
        </Logo>
      </Header>
      <Body>
        <Presentation>
          <div>
            <p>Hi!</p>
            <p>I'm a Freelancer Developer.</p>
          </div>
          <Photo
            src="/static/nurycaroline.jpg"
            alt="Nurielly Caroline Brizola"
          />
        </Presentation>
        <Links />
      </Body>
    </Container>
  );
}
