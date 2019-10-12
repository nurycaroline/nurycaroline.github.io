import React from "react";
import { Container, Title, List, ListItem } from "./styles";
import WorksData from "../../data/works.json";

const Works = ({ items = [] }) => {
  return (
    <Container>
      <Title>Works</Title>

      <List>
        {WorksData.works.map(work => (
          <ListItem key={work.name} work={work} />
        ))}
      </List>
    </Container>
  );
};

export default Works;
