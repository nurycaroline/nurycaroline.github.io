import React from "react";
import Links from "../../components/Links";

import { Container, Title, SkillsGroup, Skill } from "./styles";

export default function About() {
  return (
    <Container>
      <div>
        <Title>About</Title>

        <SkillsGroup>
          <p>
            I work for about 6 years with web(HTML5, CSS3, ES6), and 3 years
            with React. I am a quick learner, and a dedicated professional. In
            addition, I am always eager to further develop my skills and add
            value to the solutions I work with.
          </p>
          <Skill>
            <h3>Web App Development</h3>
            {/* <ul>
              <li>- HTML, CSS</li>
              <li>- Javascript (ES6, ES7+)</li>
              <li>- React, Redux, Flux</li>
              <li>- Web Responsive</li>
            </ul> */}
          </Skill>
          <Skill>
            <h3>Mobile App Development</h3>
            {/* <ul>
              <li>- React Native</li>
              <li>- Progressive Web Apps (PWA)</li>
            </ul> */}
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
