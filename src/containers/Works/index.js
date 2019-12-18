import React from "react";
import Title from "../../components/Title";
import List from "../../components/List";
import Card from "./Card";

import { Container } from "./styles";

import WorksData from "../../data/works.json";

const Works = () => {
  return (
    <Container>
      <Title>Works</Title>

      <List>
        {WorksData.works.map(work => (
          <Card
            key={work.name}
            work={work}
          />
        ))}
      </List>
    </Container>
  );
};

export default Works;
