import React from "react";
import List from "../../components/List";

import { Container, Item, Title } from "./styles";

import ProjectData from "../../data/projects.json";

const ForFun = () => {
  return (
    <Container>
      <Title>For Fun</Title>

      <List>
        {ProjectData.projects.map(project => (
          <Item key={project.name}>
            <img
              src={project.image}
              alt="Project picture"
              description={project.description}
              title={project.title}
            />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank">
                view project
              </a>
            </div>
          </Item>
        ))}
      </List>
    </Container>
  );
};

export default ForFun;
