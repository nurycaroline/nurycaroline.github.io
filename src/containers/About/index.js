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
            <h3>Web App Development</h3>
            <ul>
              <li>- HTML, CSS</li>
              <li>- Javascript (ES6, ES7+)</li>
              <li>- React, Redux, Flux</li>
              <li>- Web Responsive</li>
            </ul>
          </Skill>
          <Skill>
            <h3>Mobile App Development</h3>
            <ul>
              <li>- React Native</li>
              <li>- Progressive Web Apps (PWA)</li>
            </ul>
          </Skill>
          <br />
          <Links />
        </SkillsGroup>
      </div>
      <img
        src="/static/polygon-bottom.png"
        alt="Polygon Decoration"
        title="Polygon Decoration Bottom"
      />
    </Container>
  );
}
