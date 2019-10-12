import React from "react";
import Links from "../../components/Links";

import { Container, Title, SkillsGroup, Skill } from "./styles";

export default function About() {
  return (
    <Container>
      <div>
        <Title>About</Title>

        <SkillsGroup>
          <Skill>
            <h2>Web App Development</h2>
            <ul>
              <li>- HTML, CSS</li>
              <li>- Javascript (ES6, ES7+)</li>
              <li>- React, Redux, Flux</li>
              <li>- Web Responsive</li>
            </ul>
          </Skill>
          <Skill>
            <h2>Mobile App Development</h2>
            <ul>
              <li>- React Native</li>
              <li>- Progressive Web Apps (PWA)</li>
            </ul>
          </Skill>
        </SkillsGroup>
        <br />
        <Links />
      </div>
      <img src="/static/polygon-bottom.png" alt="Poligno de decoracao" />
    </Container>
  );
}
